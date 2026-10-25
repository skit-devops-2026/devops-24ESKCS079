import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
const router = Router();
router.get('/', (_req, res) => res.json({ status: 'ok', service: 'MEDCARE++ API' }));
router.get('/me', requireAuth, (req, res) => res.json({ user: { id: req.user.sub, email: req.user.email, role: req.user.role } }));
// Demo-only readings. These are illustrative values, not medical measurements.
router.get('/vitals', requireAuth, (_req, res) => res.json({ demo: true, readings: [{ label: 'Heart Rate', value: 72, unit: 'BPM' }, { label: 'Blood Pressure', value: '118/78', unit: 'mmHg' }, { label: 'SpO₂', value: 98, unit: '%' }] }));
export default router;
