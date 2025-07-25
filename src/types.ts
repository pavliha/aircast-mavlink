export interface MAVLinkDialectDefinition {
  version?: string;
  dialect?: number;
  includes?: string[];
  enums?: EnumDefinition[];
  messages?: MessageDefinition[];
}

export interface EnumDefinition {
  name: string;
  description?: string;
  bitmask?: boolean;
  entries: EnumEntry[];
}

export interface EnumEntry {
  name: string;
  value: string;
  description?: string;
}

export interface MessageDefinition {
  id: number;
  name: string;
  description?: string;
  fields: FieldDefinition[];
}

export interface FieldDefinition {
  name: string;
  type: string;
  enum?: string;
  description?: string;
  extension?: boolean;
}

export interface TypeScriptEnum {
  name: string;
  description: string[];
  values: TypeScriptEnumValue[];
  bitmask: boolean;
}

export interface TypeScriptEnumValue {
  name: string;
  value: number;
  description: string[];
}

export interface TypeScriptField {
  name: string;
  type: string;
  originalType?: string;
  description: string[];
  optional: boolean;
  arrayLength?: number;
  extension?: boolean;
}

export interface TypeScriptMessage {
  id?: number;
  name: string;
  originalName: string;
  description: string[];
  fields: TypeScriptField[];
  crcExtra: number;
}

export interface TypeScriptDialect {
  dialectName: string;
  enums: TypeScriptEnum[];
  messages: TypeScriptMessage[];
}

export interface GenerationOptions {
  dialectName: string;
  outputFormat: 'single' | 'separate';
  includeTypeGuards: boolean;
  includeEnums: boolean;
}

// XML parsing types
export interface MAVLinkDialect {
  version?: string;
  dialect?: string;
  include?: string | string[];
  enums?: { enum: XMLEnum | XMLEnum[] };
  messages?: { message: XMLMessage | XMLMessage[] };
}

export interface XMLEnum {
  $: { name: string; bitmask?: string };
  description?: string;
  entry?: XMLEnumEntry | XMLEnumEntry[];
}

export interface XMLEnumEntry {
  $: { name: string; value: string };
  description?: string;
  _?: string; // text content
}

export interface XMLMessage {
  $: { id: string; name: string };
  description?: string;
  field?: XMLField | XMLField[];
  extensions?: string; // MAVLink extensions marker
}

export interface XMLField {
  $: { name: string; type: string; enum?: string };
  _?: string; // description text content
  description?: string;
}