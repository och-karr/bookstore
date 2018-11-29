import React from 'react';

class AdminPanel extends React.Component {

    render() {

        const adminCss = {
            padding: "10px"
        }

        return (
            <div className="adminPanel col-md-4" style={adminCss}>
                <form>
                    <div className="form-group">
                        <label for="bookNameInput">Book name:</label>
                        <input type="text" placeholder="Book name" id="bookNameInput" name="bookName" className="form-control"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default AdminPanel;