import React, { Component } from 'react'
import Uppy from '@uppy/core';
import Dashboardd from '@uppy/dashboard';
import Tus from '@uppy/tus';



class Dashboard extends Component {

  componentDidMount() {
    const uppy = Uppy({
      debug: true,
      autoProceed: false,
      restrictions: {
        maxFileSize: 5000000,
        minNumberOfFiles: 1,
        maxNumberOfFiles: 1,
        allowedFileTypes: ['image/*']
      }
    })
      .use(Dashboardd, {
        inline: true,
        target: '#dashboard',
        // trigger: '.UppyModalOpenerBtn',
        // replaceTargetContent: true,
        // showProgressDetails: true,
        // note: 'Images and video only, 2–3 files, up to 1 MB',
        width: 350,
        height: 250
      })
      .use(Tus, { endpoint: 'https://master.tus.io/files/' });

    uppy.on('complete', result => {
      console.log('successful files:', result.successful)
      console.log('failed files:', result.failed)
    })
  }

  render() {
    return (
      <div id="dashboard" />
    )
  }
}

export default Dashboard;