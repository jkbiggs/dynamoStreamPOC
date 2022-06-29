import { DynamoDB } from 'aws-sdk'
import { GetItemOutput, QueryOutput } from 'aws-sdk/clients/dynamodb'

const dynamoDb = new DynamoDB.DocumentClient({
  httpOptions: {
    timeout: 5000
  },
  maxRetries: 3
})
const PREFERENCE_TABLE = preferenceTable
export const addPreference = async (id, attribute, value) => {
  const params = {
    TableName: PREFERENCE_TABLE,
    Item: {
      id: id,
      attribute: attribute,
      value: value
    }
  }

  try {
    await dynamoDb.put(params).promise()
    return true
  } catch (err) {
    throw new Error(`Failure to add preference ${id} to dynamodb`)
  }
}

export const updatePreference = async (id, attribute, value) => {
  const params = {
    TableName: PREFERENCE_TABLE,
    Key: {
      id: id
    },
    UpdateExpression: 'set #attribute = :s',
    ExpressionAttributeNames: {
      '#attribute': attribute
    },
    ExpressionAttributeValues: {
      ':s': value
    }
  }

  try {
    await dynamoDb.update(params).promise()
    return true
  } catch (err) {
    throw new Error(`Failure to update order ${id} task token to dynamodb`)
  }
}