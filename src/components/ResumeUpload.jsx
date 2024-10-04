import { useState } from 'react';
import Modal from './Modal';

const ResumeUpload = ({ onUploadComplete }) => {
    const [file, setFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
        }
        setIsDragOver(false);
    };

    const handleUpload = () => {
        if (file) {
            setModalMessage(`File selected: ${file.name}`);
            setIsModalOpen(true);
            // Call the onUploadComplete callback
            onUploadComplete(); // Notify parent component that the upload is complete
            // Reset the file state after showing the message if needed
            setFile(null);
        } else {
            setModalMessage('Please select a file to upload.');
            setIsModalOpen(true);
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4">Upload Your Resume</h3>
            <p className="text-gray-600 mb-2">Please upload your resume in PDF format.</p>
            <div 
                className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-colors ${isDragOver ? 'border-blue-500' : 'border-gray-300'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('file-input').click()}
            >
                {file ? (
                    <div className="text-center">
                        <p className="text-gray-700">Selected File:</p>
                        <p className="font-semibold">{file.name}</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-gray-500">Drag and drop your resume here</p>
                        <p className="text-gray-500">or click to select a file</p>
                    </div>
                )}
                <input 
                    type="file" 
                    id="file-input" 
                    accept=".pdf" 
                    className="hidden"
                    onChange={handleFileChange} 
                />
            </div>
            <button 
                onClick={handleUpload}
                className="mt-4 w-full bg-blue-600 text-white rounded-md py-2 font-semibold hover:bg-blue-700 transition-colors"
            >
                Upload
            </button>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                message={modalMessage} 
            />
        </div>
    );
};

export default ResumeUpload;
