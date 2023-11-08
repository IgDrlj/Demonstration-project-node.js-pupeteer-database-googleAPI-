const {google} = require('googleapis');

async function addToSheet(values){
  try{

      const auth = new google.auth.GoogleAuth({
        keyFile : 'credentials.json',
        scopes  : 'https://www.googleapis.com/auth/spreadsheets',

      });

      // create client for auth

      const client = await auth.getClient();

      // sheets api action

      const googleSheets = google.sheets({version: 'v4', auth : client});


      const spreadsheetId = '';

      // get metadata about sheet

      const metaData = await googleSheets.spreadsheets.get({
         
        auth,
        
        spreadsheetId,

      });

      // write rows

      await googleSheets.spreadsheets.values.append({

        auth,

        spreadsheetId,

        range: 'Sheet1',

        valueInputOption: 'USER_ENTERED',

        resource : {
          values: values,
        }

      })
    }catch(err){}
}

module.exports.addToSheet = addToSheet;
