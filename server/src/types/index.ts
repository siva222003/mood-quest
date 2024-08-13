import { JwtPayload } from "jsonwebtoken";

export interface IJWT_PAYLOAD extends JwtPayload {
  id: string;
}
