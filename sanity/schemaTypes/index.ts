import { post } from "./documents/post";
import { author } from "./documents/author";
import { category } from "./documents/category";
import { blockContent } from "./objects/blockContent";
import { settings } from "./documents/settings";

export const schemaTypes = [post, author, category, blockContent, settings];
