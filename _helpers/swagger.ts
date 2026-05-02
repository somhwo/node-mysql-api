import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import { Router } from 'express';
import path from 'path';

const router = Router();
const swaggerDocument = yaml.load(path.join(__dirname, '../swagger.yaml'));
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;