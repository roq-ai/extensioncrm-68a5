import { ContactInterface } from 'interfaces/contact';
import { CustomerSupportInterface } from 'interfaces/customer-support';
import { LeadInterface } from 'interfaces/lead';
import { OpportunityInterface } from 'interfaces/opportunity';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  contact?: ContactInterface[];
  customer_support?: CustomerSupportInterface[];
  lead?: LeadInterface[];
  opportunity?: OpportunityInterface[];
  user?: UserInterface;
  _count?: {
    contact?: number;
    customer_support?: number;
    lead?: number;
    opportunity?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
