import express, { Request, Response } from 'express';
import Order from '../models/Order';

const router = express.Router();

router.post('/orders', async (req: Request, res: Response) => {
  try {
    const { name, phone, address, items, total } = req.body;

    const order = new Order({
      name,
      phone,
      address,
      items,
      total,
    });

    await order.save();

    res.status(201).json({ message: 'Замовлення оформлено успішно!', order });
  } catch (error) {
    console.error('Помилка при збереженні замовлення:', error);
    res.status(500).json({ message: 'Помилка при оформленні замовлення' });
  }
});

router.get('/orders', async (req: Request, res: Response) => {
  try {
    const orders = await Order.find().populate('items.productId');
    res.status(200).json({ orders });
  } catch (error) {
    console.error('Помилка при отриманні замовлень:', error);
    res.status(500).json({ message: 'Не вдалося отримати замовлення' });
  }
});

export default router;
