import { put } from '@vercel/blob';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { filename } = req.query;
    const blob = await put(filename as string, req.body, {
      access: 'public',
      addRandomSuffix: false,
      contentType: 'video/mp4'
    });

    return res.status(200).json(blob);
  } catch (error) {
    return res.status(500).json({ error: 'Error uploading to blob storage' });
  }
} 