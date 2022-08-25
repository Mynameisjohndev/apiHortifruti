import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/user'

Route.get('/', async () => {
  User.create({
    email: 'admin@gmail.com',
    password: 'admin2123',
    type: 'admin',
  })
})
