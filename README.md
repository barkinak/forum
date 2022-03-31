# Forum
Forum is a social interaction web app which is built using Angular and .NET Core. It has functionalities like messaging and user presence tracking through SignalR and Azure SQL database.
A working sample of the app is published to Azure and can be found on this [link](https://forumsocialuat.azurewebsites.net/). Due to AppService costs of Azure, it might be stopped from time to time. An image of the chat panel is provided below. 

<p align="center">
  <img src="https://github.com/barkinak/forum/blob/main/docs/picture1.png" width="720" title="Chat Page">
</p>

### Local testing
To test the app locally, we can cd into client and run 'ng serve'. The api also needs to be running. So, we also need to cd into api on another terminal and run 'dotnet run'. The published application is currently targeting a database on Azure and the connection string is not present in appsettings. Therefore, it is necessary to create migrations first and create a schema from the migration. Sqlite could be a good option for local testing.
