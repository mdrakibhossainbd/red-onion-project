import React from 'react';
import { Link } from 'react-router-dom';
import AddItems from './AddItems/AddItems';

const AdminPanel = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <p> <Link to='#'>Add New Item</Link> </p>
                </div>
                <div className="col-md-10">
                    <AddItems/>
                </div>
            </div>
            
        </div>
    );
};

export default AdminPanel;