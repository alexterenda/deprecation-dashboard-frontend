const MockData = {
  versions: [{
      apis: {
        id: 1,
        name: "Twitter",
        status: "1",
        tray_version: "v1.0.2",
        latest_version: "v1.0.3",
        developer: "Harry Smith",
        description: "The Twitter API enables programmatic access to Twitter in unique and advanced ways.",
        api_acc_manager: "Susan Crawford",
        logo_url: "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale",
        last_update: "02/02/21"
      },
      updates: [{
          id: 1,
          api_id: 1,
          status: "3",
          deprecation_date: "05/04/2021",
          endpoint: "https://api.github.com/user/keys",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, obcaecati neque. Ipsam a inventore quam quibusdam sint iste deleniti, rem unde sapiente molestiae quidem nam ratione quia sunt, commodi dolore.",
          source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
        },
        {
          id: 5,
          api_id: 1,
          status: "3",
          deprecation_date: "12/04/2021",
          endpoint: "https://api.github.com/user/keys",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi mollitia accusantium odit molestiae aut sunt minima tempora nihil aliquam quidem, ullam aperiam. Ab vitae voluptatum incidunt, facilis voluptatibus tempora.",
          source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
        }
      ]
    },
    {
      apis: {
        id: 2,
        name: "Reddit",
        status: "3",
        tray_version: "v5.6.8",
        latest_version: "v5.7.1",
        developer: "Ronald McDonald",
        description: "Reddit API Access. We want to allow developers to build great products powered by Reddit and we recognize our developer community.",
        api_acc_manager: "Susan Crawford",
        logo_url: "https://i.redd.it/2qy7unjo2j331.png",
        last_update: "21/01/21"
      },
      updates: [{
          id: 2,
          api_id: 1,
          status: "3",
          deprecation_date: "15/04/2021",
          endpoint: "https://api.github.com/user/keys",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non mollitia fuga ab eius velit laboriosam aliquam ea assumenda, at quidem cum asperiores architecto consequuntur rerum sit iure officia ipsam officiis.",
          source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
        },
        {
          id: 3,
          api_id: 1,
          status: "3",
          deprecation_date: "25/04/2021",
          endpoint: "https://api.github.com/user/keys",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure provident rerum asperiores natus nemo architecto dolor rem quos dicta labore, atque totam nihil ullam veniam porro cupiditate neque minus consequatur.",
          source: "https://developer.github.com/changes/2020-02-14-deprecating-password-auth/"
        }
      ]
    }, {
      apis: {
        id: 3,
        name: "Yelp",
        status: "2",
        tray_version: "v11.0.1",
        latest_version: "v11.2.3",
        developer: "Samantha Bourne",
        description: "The Yelp API gives you access to search for over 50,000,000 businesses in 32 countries.",
        api_acc_manager: "Dimitri Turkov",
        logo_url: "https://s3-media2.fl.yelpcdn.com/assets/srv0/styleguide/ea6185261f17/assets/img/brand_guidelines/fuoy.png",
        last_update: "12/29/20"
      },
      updates: [{
        id: 4,
        api_id: 1,
        status: "3",
        deprecation_date: "20/05/2021",
        endpoint: "https://api.github.com/user/keys",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quae tenetur ratione nesciunt et explicabo velit pariatur iure nemo cumque perferendis dolores quo. Earum laborum in enim doloribus sed obcaecati.",
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