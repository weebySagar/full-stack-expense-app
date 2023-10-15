import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import "../styles/leaderboard/leaderboard.scss"
import { getAllDownloadedFiles } from '../services/user-api';
import { BsDownload } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const DownloadedFiles = () => {
    const [filesData, setFilesData] = useState([]);


    useEffect(() => {
        getAllDownloadedFiles().then(data => setFilesData(data)).catch(err => toast.error(err))
    }, [])


    return (
        <div className='downloaded-files bg-7 rounded h-100' style={{ padding: '20px' }}>
            <div className="inner-wrapper">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="text-content">
                            <div className="heading">
                                <h4>Downloaded Files</h4>
                            </div>

                            <div className="sub-heading my-4">
                                {
                                    filesData.length >0 ?
                                    <p>Previously downloaded files are here</p>
                                    : <p>There are no previous files that you have downloaded</p>
                                }
                            </div>
                        </div>
                        <div className="col">

                                <div className="files-table content-wrapper">
                            {
                                    filesData.length > 0 ?
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Downloaded at</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filesData.map((data, index) => <tr>
                                                <td>{index + 1}</td>
                                                <td>{data.createdAt.split('T')[0]}</td>
                                                <td><a href={data.fileUrl} className='btn btn-outline-light btn-sm'>
                                                    Download
                                                    <BsDownload className='mx-2' />
                                                </a>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>

                                :

                                <div className='redirect-btn'>
                                    <Link to='/dashboard/expense' className='btn-secondary'>Go to Download File</Link>
                                </div>
                            }
                            </div>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadedFiles