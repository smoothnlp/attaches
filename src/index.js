/* eslint-disable jsdoc/require-returns */
import './index.css';
import Uploader from './uploader';
import Icon from './svg/toolbox.svg';
import FileIcon from './svg/standard.svg';
import CustomFileIcon from './svg/custom.svg';
import DownloadIcon from './svg/arrow-download.svg';
const LOADER_TIMEOUT = 500;

/**
 * @typedef {object} AttachesToolData
 * @description Attaches Tool's output data format
 * @property {AttachesFileData} file - object containing information about the file
 * @property {string} title - file's title
 */

/**
 * @typedef {object} AttachesFileData
 * @description Attaches Tool's file format
 * @property {string} [url] - file's upload url
 * @property {string} [size] - file's size
 * @property {string} [extension] - file's extension
 * @property {string} [name] - file's name
 */

/**
 * @typedef {object} FileData
 * @description Attaches Tool's response from backend
 * @property {string} url - file's url
 * @property {string} name - file's name with extension
 * @property {string} extension - file's extension
 */

/**
 * @typedef {object} UploadResponseFormat
 * @description This format expected from backend on file upload
 * @property {number} success  - 1 for successful uploading, 0 for failure
 * @property {FileData} file - backend response with uploaded file data.
 */

/**
 * @typedef {object} AttachesToolConfig
 * @description Config supported by Tool
 * @property {string} endpoint - file upload url
 * @property {string} field - field name for uploaded file
 * @property {string} types - available mime-types
 * @property {string} placeholder
 * @property {string} errorMessage
 */

/**
 * @class AttachesTool
 * @classdesc AttachesTool for Editor.js 2.0
 *
 * @property {API} api - Editor.js API
 * @property {AttachesToolData} data
 * @property {AttachesToolConfig} config
 */
export default class AttachesTool {
  /**
   * @param {AttachesToolData} data
   * @param {object} config
   * @param {API} api
   */
  constructor({
    data,
    config,
    api,
    readOnly,
  }) {
    this.api = api;
    this.readOnly = readOnly;
    this.nodes = {
      wrapper: null,
      button: null,
      title: null,
    };
    this._data = {
      file: {},
      title: '',
    };

    this.config = {
      endpoint: config.endpoint || '',
      field: config.field || 'file',
      types: config.types || '*',
      buttonText: config.buttonText || '请选择要上传的附件',
      errorMessage: config.errorMessage || '文件上传失败',
      uploader: config.uploader,
      maxSize: config.maxSize || 100,
    };

    this.data = data;

    /**
     * Module for files uploading
     */
    this.uploader = new Uploader({
      config: this.config,
      onUpload: (response) => this.onUpload(response),
      onError: (error) => this.uploadingFailed(error),
    });

    this.enableFileUpload = this.enableFileUpload.bind(this);
  }

  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }
  
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: Icon,
      title: 'Attaches',
    };
  }

  /**
   * Tool's CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      apiButton: this.api.styles.button,
      loader: this.api.styles.loader,
      /**
       * Tool's classes
       */
      wrapper: 'cdx-attaches',
      wrapperWithFile: 'cdx-attaches--with-file',
      wrapperLoading: 'cdx-attaches--loading',
      button: 'cdx-attaches__button',
      title: 'cdx-attaches__title',
      size: 'cdx-attaches__size',
      downloadButton: 'cdx-attaches__download-button',
      fileInfo: 'cdx-attaches__file-info',
      fileIcon: 'cdx-attaches__file-icon',
    };
  }

  /**
   * Possible files' extension colors
   */
  get EXTENSIONS() {
    return AttachesTool.getExtensionColors();
  }

  /**
   * 静态犯方法
   */
  static getExtensionColors() {
    return {
      doc: '#3e74da',
      docx: '#3e74da',
      odt: '#3e74da',
      pdf: '#d47373',
      rtf: '#656ecd',
      tex: '#5a5a5b',
      txt: '#5a5a5b',
      pptx: '#e07066',
      ppt: '#e07066',
      mp3: '#eab456',
      mp4: '#f676a6',
      xls: '#3f9e64',
      html: '#2988f0',
      htm: '#2988f0',
      png: '#f676a6',
      jpg: '#f67676',
      jpeg: '#f67676',
      gif: '#f6af76',
      zip: '#4f566f',
      rar: '#4f566f',
      exe: '#e26f6f',
      svg: '#bf5252',
      key: '#e07066',
      sketch: '#df821c',
      ai: '#df821c',
      psd: '#388ae5',
      dmg: '#e26f6f',
      json: '#2988f0',
      csv: '#3f9e64',
    };
  }

  /**
   * Return Block data
   *
   * @param {HTMLElement} toolsContent
   * @returns {AttachesToolData}
   */
  save(toolsContent) {
    /**
     * If file was uploaded
     */
    if (this.pluginHasData()) {
      const title = toolsContent.querySelector(`.${this.CSS.title}`).innerHTML;

      Object.assign(this.data, {
        title,
      });
    }

    return this.data;
  }

  /**
   * Renders Block content
   *
   * @returns {HTMLDivElement}
   */
  render() {
    const holder = this.make('div', this.CSS.baseClass);

    this.nodes.wrapper = this.make('div', this.CSS.wrapper);

    if (this.pluginHasData()) {
      this.showFileData();
    } else {
      this.prepareUploadButton();
    }

    holder.appendChild(this.nodes.wrapper);

    return holder;
  }

  /**
   * Prepares button for file uploading
   */
  prepareUploadButton() {
    this.nodes.button = this.make('div', [this.CSS.apiButton, this.CSS.button]);
    this.nodes.button.innerHTML = `${Icon} ${this.config.buttonText}`;
    this.nodes.button.addEventListener('click', this.enableFileUpload);
    this.nodes.wrapper.appendChild(this.nodes.button);
  }

  /**
   * Fires after clicks on the Toolbox AttachesTool Icon
   * Initiates click on the Select File button
   *
   * @public
   */
  appendCallback() {
    this.nodes.button.click();
  }

  /**
   * Checks if any of Tool's fields have data
   *
   * @returns {boolean}
   */
  pluginHasData() {
    return this.data.title !== '' || Object.values(this.data.file).some(item => item !== undefined);
  }

  /**
   * Allow to upload files on button click
   */
  enableFileUpload() {
    this.uploader.uploadSelectedFile({
      onPreview: () => {
        this.nodes.wrapper.classList.add(this.CSS.wrapperLoading, this.CSS.loader);
      },
    });
  }

  /**
   * File uploading callback
   *
   * @param {UploadResponseFormat} response
   */
  onUpload(response) {
    // console.log('on upload', response);
    const {
      success,
      file,
    } = response;

    if (success && file) {
      const {
        url,
        name,
        size,
      } = file;

      this.data = {
        file: {
          url,
          extension: name.split('.').pop(),
          name,
          size,
        },
        title: name,
      };

      this.nodes.button.remove();
      this.showFileData();
      this.moveCaretToEnd(this.nodes.title);
      this.nodes.title.focus();
      this.removeLoader();
    } else {
      this.uploadingFailed(this.config.errorMessage);
    }
  }

  /**
   * Handles uploaded file's extension and appends corresponding icon
   */
  appendFileIcon() {
    const extension = this.data.file.extension || '';
    const extensionColor = this.EXTENSIONS[extension];

    const fileIcon = this.make('div', this.CSS.fileIcon, {
      innerHTML: extensionColor ? CustomFileIcon : FileIcon,
    });

    if (extensionColor) {
      fileIcon.style.color = extensionColor;
      fileIcon.setAttribute('data-extension', extension);
    }

    this.nodes.wrapper.appendChild(fileIcon);
  }

  static getFileIcons() {

    return {
      CustomFileIcon,
      FileIcon,
      DownloadIcon
    };
  }

  /**
   * Removes tool's loader
   */
  removeLoader() {
    setTimeout(() => this.nodes.wrapper.classList.remove(this.CSS.wrapperLoading, this.CSS.loader), LOADER_TIMEOUT);
  }

  /**
   * If upload is successful, show info about the file
   */
  showFileData() {
    this.nodes.wrapper.classList.add(this.CSS.wrapperWithFile);

    const {
      file: {
        size,
        url,
      },
      title,
    } = this.data;

    this.appendFileIcon();

    const fileInfo = this.make('div', this.CSS.fileInfo);

    if (title) {
      this.nodes.title = this.make('div', this.CSS.title, {
        contentEditable: true,
      });

      this.nodes.title.textContent = title;
      fileInfo.appendChild(this.nodes.title);
    }

    if (size) {
      const {
        sizePrefix,
        formattedSize
      } = AttachesTool.converSize(size);
      const fileSize = this.make('div', this.CSS.size);

      fileSize.textContent = formattedSize;
      fileSize.setAttribute('data-size', sizePrefix);
      fileInfo.appendChild(fileSize);
    }

    this.nodes.wrapper.appendChild(fileInfo);

    const downloadIcon = this.make('a', this.CSS.downloadButton, {
      innerHTML: DownloadIcon,
      href: url,
      target: '_blank',
      rel: 'nofollow noindex noreferrer',
    });

    this.nodes.wrapper.appendChild(downloadIcon);
  }

  /**
   * 单位换算换算
   * @param size 原始尺寸
   */
  static converSize(size) {
    let sizePrefix = 'KiB';
    let formattedSize = 0;

    if (Math.log10(+size) >= 6) {
      sizePrefix = 'MiB';
      formattedSize = size / Math.pow(2, 20);
    } else {
      sizePrefix = 'KiB';
      formattedSize = size / Math.pow(2, 10);
    }
    formattedSize = formattedSize.toFixed(1);

    return {
      sizePrefix,
      formattedSize,
    };
  }

  /**
   * If file uploading failed, remove loader and show notification
   *
   * @param {string} errorMessage -  error message
   */
  uploadingFailed(errorMessage) {
    this.api.notifier.show({
      message: errorMessage,
      style: 'error',
    });

    this.removeLoader();
  }

  /**
   * Return Attaches Tool's data
   *
   * @returns {AttachesToolData}
   */
  get data() {
    return this._data;
  }

  /**
   * Stores all Tool's data
   *
   * @param {AttachesToolData} data
   */
  set data({
    file,
    title,
  }) {
    this._data = Object.assign({}, {
      file: {
        url: (file && file.url) || this._data.file.url,
        name: (file && file.name) || this._data.file.name,
        extension: (file && file.extension) || this._data.file.extension,
        size: (file && file.size) || this._data.file.size,
      },
      title: title || this._data.title,
    });
  }

  /**
   * Moves caret to the end of contentEditable element
   *
   * @param {HTMLElement} element - contentEditable element
   */
  moveCaretToEnd(element) {
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  /**
   * Helper method for elements creation
   *
   * @param tagName
   * @param classNames
   * @param attributes
   * @returns {HTMLElement}
   */
  make(tagName, classNames = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
  }
}