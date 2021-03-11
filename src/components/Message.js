import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import '../css/message.css';

function Message({ username, message }) {
    const isUSer = username === message.username;
    return (
        <div className={`message__card ${isUSer && "message__user"}`}>
            <Card className={isUSer ? "message__userCard" : "message__geustCard"}>
                <CardContent>
                    <Typography variant="body1" color="textPrimary">{!isUSer && `${message.username || 'Unknown user'}: `}{message.message}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
