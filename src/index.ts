import 'dotenv/config';
import { app, PORT } from './app';

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
