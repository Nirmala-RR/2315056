# Notification System Design

# Stage 1

## Get Notification
Method : GET
Endpoint : /api/v1/notifications

# Headers

Authorization :Bearer
Content-Type:application/json

# Response
{
    "notifications":[
        {
            "id":1,
            "type":"Placement",
            "Message":"Placement drive"
        }
    ]
}

# Get Notification By ID

Method:GET
EndPoint: /api/notifications/{id}

# Response
{
    "notifications":[
        {
            "id":1,
            "type":"Placement",
            "Message":"Placement drive"
        }
    ]
}

# Mark as Read

Method:GET
EndPoint: /api/notifications/{id}/read

# Response
{
    "notifications":[
        {
            "Message":"Notification marked as Read"
        }
    ]
}

# Mark All as Read

Method:GET
EndPoint: /api/notifications/{id}/read-all

# Response
{
    "notifications":[
        {
            "Message":"All Notification marked as Read"
        }
    ]
}

# Delete Notification

Method:DELETE
EndPoint: /api/notifications/{id}

# Response
{
    "notifications":[
        {
            "Message":"dELETED Successfully"
        }
    ]
}

# Create Notification
Method:POST
EndPoint: /api/notifications

# Request
{
    "notifications":[
        {
            "type":"Placement",
            "Message":"Placement drive",
            "studentId":1001
        }
    ]
}

# Response 

{
    "message":"Notification created"
}


# Real time Notification

For real time Notification , WebSockets are used.

The Admin create Notification -> Notification stores in database -> server sends notification through Websocket -> Student recieve notification in real time immediately


