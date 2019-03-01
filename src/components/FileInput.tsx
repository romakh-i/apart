import React, { Component } from 'react'
import Uppy from '@uppy/core';
import InputFile from '@uppy/file-input';
import Tus from '@uppy/tus';
import ProgressBar from '@uppy/progress-bar';

export default class FileInput extends Component {
  componentDidMount() {
    const uppy = Uppy({
      debug: true,
      autoProceed: false,
    });

    uppy.use(InputFile, {
      // target: '#fileInput',
      pretty: false
    });

    uppy.use(Tus, { endpoint: 'https://master.tus.io/files/' })
      .use(ProgressBar, { target: '#progress', hideAfterFinish: false });

    // uppy.on('file-added', (file) => {
    //   console.log('state', uppy.getState());

    //   console.log('Added file');
    //   console.log($('.uppy-FileInput-input'));

    //   var reader = new FileReader();
    //   reader.onload = function (e: any) {
    //     console.log('e   ', e);
    //     $('#loaded-img')
    //       .attr('src', e.target.result)
    //       .width(150)
    //       .height(200);
    //   };
    //   reader.readAsDataURL(new Blob(file));
    // })

    $('#upload').click(function (e: any) {
      e.preventDefault();
      uppy.upload();
    });

    uppy.on('complete', ({ successful, failed }) => {
      if (successful.length) {
        console.log('successful files:', successful)
      }
      if (failed.length)
        console.log('failed files:', failed)

    })
  }
  handleChange(input: any) {
    console.log(this)
    console.log('changed')
    console.log(input)
    if (input.files && input.files[0]) {
      console.log('in')
      var reader = new FileReader();
      reader.onload = function (e: any) {
        console.log(e)
        $('#loaded-img')
          .attr('src', e.target.result)
          .width(150)
          .height(200);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  render() {
    return (
      <div>
        <img id="loaded-img" src="" alt="" />
        <input id="fileInpu" type='file' onChange={this.handleChange}></input>
        <div id="progress"></div>
        <button id="upload">Upload</button>
      </div>
    )
  }
}
