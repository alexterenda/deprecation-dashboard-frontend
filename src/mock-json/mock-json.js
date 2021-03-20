const MockData = {
  versions: [{
      apis: {
        name: "Twitter",
        status: "1",
        tray_version: "v1.0.2",
        latest_version: "v1.0.3"
      },
      updates: [{
          id: 1,
          api_id: 1,
          status: "3",
          deprecation_date: "05/04/2021",
          endpoint: "https://api.github.com/user/keys",
          text: "This is a fantastic new update coming in 3 weeks.",
          source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
        },
        {
          id: 5,
          api_id: 1,
          status: "3",
          deprecation_date: "12/04/2021",
          endpoint: "https://api.github.com/user/keys",
          text: "This is a fantastic new update coming in 4 weeks.",
          source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
        }
      ]
    },
    {
      apis: {
        name: "Reddit",
        status: "3",
        tray_version: "v5.6.8",
        latest_version: "v5.7.1"
      },
      updates: [{
          id: 2,
          api_id: 1,
          status: "3",
          deprecation_date: "15/04/2021",
          endpoint: "https://api.github.com/user/keys",
          text: "New features include being able to send data easily.",
          source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
        },
        {
          id: 3,
          api_id: 1,
          status: "3",
          deprecation_date: "25/04/2021",
          endpoint: "https://api.github.com/user/keys",
          text: "New features include new data fields.",
          source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
        }
      ]
    }, {
      apis: {
        name: "Yelp",
        status: "2",
        tray_version: "v11.0.1",
        latest_version: "v11.2.3"
      },
      updates: [{
        id: 4,
        api_id: 1,
        status: "3",
        deprecation_date: "20/05/2021",
        endpoint: "https://api.github.com/user/keys",
        text: "One month away will be amazing to see these new updates.",
        source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
      }]
    }
  ],
  notes: [{
      update_id: 1,
      user_id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci nesciunt nostrum molestias, excepturi nulla voluptates ut laborum, accusantium iusto, quaerat quos. Quibusdam dolore sequi illum dolorum magni ex eveniet.'
    },
    {
      update_id: 1,
      user_id: 2,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci nesciunt nostrum molestias, excepturi nulla voluptates ut laborum, accusantium iusto, quaerat quos. Quibusdam dolore sequi illum dolorum magni ex eveniet.'
    },
    {
      update_id: 2,
      user_id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci nesciunt nostrum molestias, excepturi nulla voluptates ut laborum, accusantium iusto, quaerat quos. Quibusdam dolore sequi illum dolorum magni ex eveniet.'
    },
    {
      update_id: 2,
      user_id: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci nesciunt nostrum molestias, excepturi nulla voluptates ut laborum, accusantium iusto, quaerat quos. Quibusdam dolore sequi illum dolorum magni ex eveniet.'
    },
    {
      update_id: 4,
      user_id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At adipisci nesciunt nostrum molestias, excepturi nulla voluptates ut laborum, accusantium iusto, quaerat quos. Quibusdam dolore sequi illum dolorum magni ex eveniet.'
    }
  ],
  users: [{
    id: 1,
    username: "bono@u2.com"
  }, {
    id: 2,
    username: "gertie@megalith.co.uk"
  }, {
    id: 3,
    username: "harry@potter.com"
  }]
};


export default MockData;