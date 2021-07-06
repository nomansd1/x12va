import React from 'react'
import './BecomeVerifier.css'
import EverySectionHeader from '../../EverySectionHeader'
import { useDropzone } from 'react-dropzone';


function BecomeVerifier() {

    const { acceptedFiles,
        getRootProps,
        getInputProps,
        open
    } = useDropzone({ accept: "image/*", noClick: true, noKeyboard: true });
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
        </li>
    ));

    return (
        <div className="wrapper__box">
            <EverySectionHeader
                title="Become a verifier"
            />
            <div className="wrapper__innerBox">
                <div className="bcv__box">
                    <form action="">
                        <div className="bcv__inputBox">
                            <label htmlFor="">Subject</label>
                            <input type="text"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="bcv__inputBox">
                            <label htmlFor="">Tell us more about yourself</label>
                            <textarea type="text"
                                placeholder="John Doe"
                            />
                        </div>
                        <div {...getRootProps()} className="file__drag">
                            <input {...getInputProps()} />
                            <p>
                                Upload Documents that can help us 
                                review your application
                            </p>
                            <p>OR</p>
                            <button type="button" onClick={open}>
                                Select a File
                            </button>
                        </div>
                        <ul> {files} </ul>
                        <button className="buttonType__one mt-2">Send Application</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BecomeVerifier
