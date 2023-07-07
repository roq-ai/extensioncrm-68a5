import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { organizationValidationSchema } from 'validationSchema/organizations';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getOrganizations();
    case 'POST':
      return createOrganization();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getOrganizations() {
    const data = await prisma.organization
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'organization'));
    return res.status(200).json(data);
  }

  async function createOrganization() {
    await organizationValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.contact?.length > 0) {
      const create_contact = body.contact;
      body.contact = {
        create: create_contact,
      };
    } else {
      delete body.contact;
    }
    if (body?.customer_support?.length > 0) {
      const create_customer_support = body.customer_support;
      body.customer_support = {
        create: create_customer_support,
      };
    } else {
      delete body.customer_support;
    }
    if (body?.lead?.length > 0) {
      const create_lead = body.lead;
      body.lead = {
        create: create_lead,
      };
    } else {
      delete body.lead;
    }
    if (body?.opportunity?.length > 0) {
      const create_opportunity = body.opportunity;
      body.opportunity = {
        create: create_opportunity,
      };
    } else {
      delete body.opportunity;
    }
    const data = await prisma.organization.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
