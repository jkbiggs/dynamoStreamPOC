import { response } from '../libs/response-lib'
import { addPreference, updatePreference } from '../libs/dynamo'

const itemHandlers = {
  "POST": create,
  "GET": get,
  "PUT": update,
  "DELETE": delete
}

module.exports.main = async (event) => {
  const httpMethod = event["httpMethod"]
  if (httpMethod in itemHandlers) {
    try {
      const result = await itemHandlers[httpMethod](event)
      return response.success(result);
    } catch (e) {
      logger.error(e)
      return response.failure({ status: false, error: e.message })
    }
  } else {
    return response.failure({ status: false, error: `Invalid HTTP Method: ${httpMethod}` })
  }
}

async function create(event) {
  const preference = JSON.parse(event.body)

  try {
    if (!preference) {
      throw new Error("Preference value is empty")
    }

    const preferenceId = preference.id
    const preferenceAttribute = preference.attribute
    const preferenceAttributeValue = preference.value

    return dynamoResponse
  } catch (err) {
    throw Error(err);
  }
}

async function get(event) {
  const preferenceId = event.pathParameters.preferenceId

  try {
    // hit ddb with pref id 
    return preferenceId;
  } catch (e) {
    throw Error(e)
  }
}

async function update(event) {
  const preferenceUpdates = JSON.parse(event.body);
  const preferenceId = event.pathParameters.preferenceId;

  try {

    if (!preferenceUpdates) {
      throw new Error("PreferenceUpdates is empty")
    }
    if (!preferenceId) {
      throw new Error("Preference id is empty")
    }

    const preferenceAttribute = preferenceUpdates.attribute
    const preferenceAttributeValue = preferenceUpdates.value


    return dynamoResponse
  } catch (e) {
    throw Error(e)
  }
}