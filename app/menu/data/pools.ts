import type { Pools } from "../lib/types";
import { breakfast } from "./breakfast";
import { dinners } from "./dinners";
import { lunches } from "./lunches";

export const pools = { breakfast, lunches, dinners } satisfies Pools;
