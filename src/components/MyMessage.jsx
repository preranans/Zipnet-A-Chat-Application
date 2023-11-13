const MyMessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0)//image
    {
        return (
            <img
                src={message.attachments[0].file} //image attachment
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        );
    }

    return ( //text
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    );
};
export default MyMessage;