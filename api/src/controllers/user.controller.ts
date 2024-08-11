import { Request, Response } from 'express';
import { UserRepository } from '../repositories/user.repository';

const userRepository = new UserRepository();

export class UserController {
    constructor() {
        this.createUser = this.createUser.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

  public async createUser(req: Request, res: Response):Promise<any> {
    console.log(req.body)
    try {
      const user = await userRepository.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }

  public async getUserById(req: Request, res: Response):Promise<any> {
    try {
      const user = await userRepository.getUserById(Number(req.params.id));
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user' });
    }
  }

  public async getAllUsers(req: Request, res: Response): Promise<any> {
    console.log('entra')
    try {
      const users = await userRepository.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get users' });
    }
  }

  public async updateUser(req: Request, res: Response):Promise<any> {
    try {
      const user = await userRepository.updateUser(Number(req.params.id), req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  }

  public async deleteUser(req: Request, res: Response):Promise<any> {
    try {
      await userRepository.deleteUser(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }

  public async getUserByEmail(req: Request, res: Response):Promise<any> {
    try {
      const user = await userRepository.getUserByEmail(req.params.email);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user' });
    }
  }

  public async getUserByPhone(req: Request, res: Response):Promise<any> {
    try {
      const user = await userRepository.getUserByPhone(req.params.phone);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get user' });
    }
  }
}

