import React, { Component } from 'react'
import Uppy from '@uppy/core';
import DragDrop from '@uppy/drag-drop';
import Tus from '@uppy/tus';
import ProgressBar from '@uppy/progress-bar';

export default class DropDrag extends Component {
  componentDidMount() {
    const uppy = Uppy({
      debug: true,
      autoProceed: false,
    });
    uppy
      .use(DragDrop, { target: '#drag-drop-area' })
      .use(Tus, { endpoint: 'https://master.tus.io/files/' })
      .use(ProgressBar, { target: '#progress', hideAfterFinish: false });

    uppy
      .on('complete', result => {
        console.log('successful files:', result.successful)
        console.log('failed files:', result.failed)
      });
    $('#upload').click(function (e: any) {
      uppy.upload();
    })
  }

  render() {
    return (
      <div>
        <div id="drag-drop-area" />
        <div id="progress"></div>
        <button id="upload">Upload</button>
      </div>
    )
  }
}
