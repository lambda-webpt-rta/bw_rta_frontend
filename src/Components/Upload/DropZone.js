import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'

import {Container} from 'reactstrap';
const DropZone = () => {
  const maxSize = 1048576;

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    accept: 'image/png',
    minSize: 0,
    maxSize,
  });

  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
  
  return (
    <div className="container text-center mt-3 " style={{background:"#c3c8ff", borderRadius:"3px"}}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {!isDragActive && <>Click here / drop a file to upload!</>}
        {isDragActive && !isDragReject && "Drop it!!!"}
        {isDragReject && "File type not accepted, sorry! Drop In an Image"}
        {isFileTooLarge && (
          <div className="text-danger mt-2">
            File is too large.
          </div>
        )}
      </div>
      <ul className="list-group mt-2">
  {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
    <li className="list-group-item list-group-item-success">
      {acceptedFile.name}
    </li>
  ))}
</ul>
    </div>
  );
};

export default DropZone;