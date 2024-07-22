'use server'
import { getBlogName } from "../service/configService";

export const Navbar = async () => {
  const blogName = await getBlogName();

    return <div>Navbar</div>
};