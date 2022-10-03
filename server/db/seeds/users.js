exports.seed = (knex) => {
  return knex('users')
    .del()
    .then(() =>
      knex('users').insert([
        {
          auth0_id: 'auth0|123456789',
          username: 'johndoe',
          email: 'john@doe.com',
          image_url:
            'https://www.gravatar.com/avatar/639bae9ac6b3e1a84cebb7b403297b79?d=retro&f=y',
        },
        {
          auth0_id: 'auth0|987654321',
          username: 'janedoe',
          email: 'jane@doe.com',
          image_url:
            'https://www.gravatar.com/avatar/128b6697ec11075134e554b0d6e098bd?d=retro&f=y',
        },
        {
          auth0_id: 'auth0|567891234',
          username: 'johnsmith',
          email: 'john@smith.com',
          image_url:
            'https://www.gravatar.com/avatar/e877c56e4fb621e81fd30dbd114a545b?d=retro&f=y',
        },
        {
          auth0_id: 'auth0|984321765',
          username: 'janesmith',
          email: 'jane@smith.com',
          image_url:
            'https://www.gravatar.com/avatar/0cc175b9c0f1b6a831c399e269772661?d=retro&f=y',
        },
      ])
    )
}
