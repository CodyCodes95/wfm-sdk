import { XMLBuilder, XMLParser } from "fast-xml-parser";

export const parseXml = <T>(xml: string) => {
  const parser = new XMLParser();
  return parser.parse(xml) as T;
};

export const buildXml = (data: Record<string, any>) => {
  const builder = new XMLBuilder();
  return builder.build(data);
};
