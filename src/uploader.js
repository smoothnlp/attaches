import ajax from '@codexteam/ajax';
/**
 * Module for file uploading.
 */
export default class Uploader {
  /**
   * @param {object} config
   * @param {Function} onUpload - callback for successful file upload
   * @param {Function} onError - callback for uploading errors
   */
  constructor({
    config,
    onUpload,
    onError,
  }) {
    this.config = config;
    this.onUpload = onUpload;
    this.onError = onError;
  }

  /**
   * Handle clicks on the upload file button
   *
   * @fires config.uploader()
   * @param file
   * @param {Function} onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({
    onPreview,
  }) {
    const preparePreview = function (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        onPreview();
      };
    };

    console.log(this.config);

    if (!this.config.uploader || typeof this.config.uploader !== 'function') {
      console.warn('need set uploader function', this.config);

      return;
    }

    ajax.selectFiles({
      accept: this.config.types,
    }).then((files) => {
      preparePreview(files[0]);
      // console.log('selectFiles', files[0].size / 1000000, this.config.maxSize);
      if (files[0].size / 1000000 > this.config.maxSize) {
        this.onError(`文件超过最大尺寸：${this.config.maxSize}Mb`);

        return;
      }
      const customUpload = this.config.uploader(files[0]).then((response) => {
        // console.log('uploader3', response);
        this.onUpload(response);
      })
        .catch((error) => {
          const message = (error && error.message) ? error.message : this.config.errorMessage;

          this.onError(message);
        });

      if (!isPromise(customUpload)) {
        console.warn('Custom uploader method uploadByFile should return a Promise');
      }
    });

    // const upload = this.config.uploader();

    // if (!isPromise(upload)) {
    //   console.warn('Custom uploader method uploadByFile should return a Promise');
    // } else {
    //   upload.then((response) => {
    //     this.onUpload(response);
    //   }).catch((error) => {
    //     const message = (error && error.message) ? error.message : this.config.errorMessage;
    //     this.onError(message);
    //   });

    // ajax.transport({
    //   url: this.config.endpoint,
    //   accept: this.config.types,
    //   beforeSend: () => onPreview(),
    //   fieldName: this.config.field
    // }).then((response) => {
    //   this.onUpload(response);
    // }).catch((error) => {
    //   const message = (error && error.message) ? error.message : this.config.errorMessage;

    //   this.onError(message);
    // });
  }
}
/**
 * Check if passed object is a Promise
 *
 * @param  {*}  object - object to check
 * @returns {boolean}
 */
function isPromise(object) {
  return Promise.resolve(object) === object;
}