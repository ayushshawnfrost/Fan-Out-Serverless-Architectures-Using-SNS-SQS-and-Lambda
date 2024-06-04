import { PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const handler = async function(event) {
  try {
    for(const record of event.Records) {
        const snsPublishedMessage = JSON.parse(record.body); 
        const reservationRequest = JSON.parse(snsPublishedMessage.Message);
        if (reservationRequest == null || reservationRequest.type == null ) {
            throw new Error(`order type should exist and should be SHIP_REQUIRED in reservationRequest: "${reservationRequest}"`);
        }
        reservationRequest.code = reservationRequest.item;        
        const dynamodbParams = {
            TableName: 'inventory',
            Item: marshall(reservationRequest || {})
        };
        const createResult = await ddbClient.send(new PutItemCommand(dynamodbParams));
        console.log("Successfully create item into order table.",  createResult); 
    }
    
  } catch (e) {
    console.error(e);
  }
};
