const MockData = [
  {
    apis: {
      status: "1",
      tray_version: "v1.0.2",
      latest_version: "v1.0.3"
    },
    updates: {
      api_id: 1,
      status: "3",
      deprecation_date: "05/04/2021",
      endpoint: "https://api.github.com/user/keys",
      text: "This is a fantastic new update coming in 3 weeks.",
      source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/" 
    }
  },
  {
    apis: {
      status: "1",
      tray_version: "v5.6.8",
      latest_version: "v5.7.1"
    },
    updates: {
      api_id: 1,
      status: "3",
      deprecation_date: "15/04/2021",
      endpoint: "https://api.github.com/user/keys",
      text: "New features include being able to send data easily.",
      source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/" 
    }
  },
  {
    apis: {
      status: "2",
      tray_version: "v11.0.1",
      latest_version: "v11.2.3"
    },
    updates: {
      api_id: 1,
      status: "3",
      deprecation_date: "20/05/2021",
      endpoint: "https://api.github.com/user/keys",
      text: "One month away will be amazing to see these new updates.",
      source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/" 
    }
  }
]

export default MockData;
