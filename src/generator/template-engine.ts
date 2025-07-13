import Handlebars from 'handlebars';
import { TypeScriptDialect } from '../types';

export class TemplateEngine {
  private templates: Map<string, HandlebarsTemplateDelegate> = new Map();

  constructor() {
    this.initializeTemplates();
    this.registerHelpers();
  }

  private initializeTemplates(): void {
    // Main types template
    this.templates.set('types', Handlebars.compile(`// Auto-generated TypeScript types for {{ dialectName }} dialect
// Generated from MAVLink XML definitions

export interface MAVLinkMessage<Content = unknown> {
  timestamp: number;
  system_id: number;
  component_id: number;
  type: string;
  payload: Content;
}

{{#each enums}}
{{#each description}}
// {{ this }}
{{/each}}
export type {{ name }} =
{{#each values}}
  | {{ value }}{{#if description}} // {{ name }} - {{ join description " " }}{{/if}}
{{/each}}
  | number;

{{/each}}
`));

    // Enums template
    this.templates.set('enums', Handlebars.compile(`// Auto-generated TypeScript enums for {{ dialectName }} dialect

{{#each enums}}
{{#each description}}
// {{ this }}
{{/each}}
export enum {{ name }}Enum {
{{#each values}}
{{#each description}}
  // {{ this }}
{{/each}}
  {{ name }} = {{ value }},
{{/each}}
}

{{/each}}
`));

    // Messages template
    this.templates.set('messages', Handlebars.compile(`// Auto-generated TypeScript message interfaces for {{ dialectName }} dialect

import { MAVLinkMessage } from './types';
import type {
{{#each enums}}
  {{ name }},
{{/each}}
} from './types';

{{#each messages}}
{{#each description}}
// {{ this }}
{{/each}}
export interface Message{{ name }} {
{{#each fields}}
{{#each description}}
  // {{ this }}
{{/each}}
  {{ name }}{{#if optional}}?{{/if}}: {{ type }};
{{/each}}
}

{{/each}}

// Message type map for type-safe message handling
export interface MessageTypeMap {
{{#each messages}}
  {{ originalName }}: Message{{ name }};
{{/each}}
}

// Union type of all message types
export type AnyMessage = 
{{#each messages}}
  | MAVLinkMessage<Message{{ name }}>
{{/each}};

// Type guard functions
{{#each messages}}
export function is{{ name }}(msg: MAVLinkMessage): msg is MAVLinkMessage<Message{{ name }}> {
  return msg.type === '{{ originalName }}';
}
{{/each}}
`));

    // Index template
    this.templates.set('index', Handlebars.compile(`// Auto-generated TypeScript index file
// Exports all dialect types

export * from './types';
export * from './enums';
export * from './messages';
`));

    // Single file template
    this.templates.set('single', Handlebars.compile(`// Auto-generated TypeScript types for {{ dialectName }} dialect
// Generated from MAVLink XML definitions

export interface MAVLinkMessage<Content = unknown> {
  timestamp: number;
  system_id: number;
  component_id: number;
  type: string;
  payload: Content;
}

// Enums
{{#each enums}}
{{#each description}}
// {{ this }}
{{/each}}
export type {{ name }} =
{{#each values}}
  | {{ value }}{{#if description}} // {{ name }} - {{ join description " " }}{{/if}}
{{/each}}
  | number;

{{/each}}

// Messages
{{#each messages}}
{{#each description}}
// {{ this }}
{{/each}}
export interface Message{{ name }} {
{{#each fields}}
{{#each description}}
  // {{ this }}
{{/each}}
  {{ name }}{{#if optional}}?{{/if}}: {{ type }};
{{/each}}
}

{{/each}}

// Message type map for type-safe message handling
export interface MessageTypeMap {
{{#each messages}}
  {{ originalName }}: Message{{ name }};
{{/each}}
}

// Union type of all message types
export type AnyMessage = 
{{#each messages}}
  | MAVLinkMessage<Message{{ name }}>
{{/each}};

// Type guard functions
{{#each messages}}
export function is{{ name }}(msg: MAVLinkMessage): msg is MAVLinkMessage<Message{{ name }}> {
  return msg.type === '{{ originalName }}';
}
{{/each}}
`));

    // Decoder definitions template
    this.templates.set('decoder', Handlebars.compile(`// Auto-generated decoder definitions for {{{ dialectName }}} dialect
// Generated from MAVLink XML definitions

interface MessageDefinition {
  id: number;
  name: string;
  fields: FieldDefinition[];
}

interface FieldDefinition {
  name: string;
  type: string;
  arrayLength?: number;
  extension?: boolean;
}

export const {{toUpperCase dialectName}}_MESSAGE_DEFINITIONS: MessageDefinition[] = [
{{#each messages}}
  {
    id: {{ id }},
    name: '{{{ originalName }}}',
    fields: [
{{#each fields}}
      {
        name: '{{{ name }}}',
        type: '{{{ originalType }}}',
{{#if arrayLength}}
        arrayLength: {{ arrayLength }},
{{/if}}
{{#if extension}}
        extension: {{ extension }},
{{/if}}
      },
{{/each}}
    ]
  },
{{/each}}
];
`));
  }

  private registerHelpers(): void {
    Handlebars.registerHelper('join', (array: string[], separator: string) => {
      return array.join(separator);
    });

    Handlebars.registerHelper('eq', (a: unknown, b: unknown) => {
      return a === b;
    });

    Handlebars.registerHelper('ne', (a: unknown, b: unknown) => {
      return a !== b;
    });

    Handlebars.registerHelper('toUpperCase', (str: string) => {
      return str.toUpperCase();
    });
  }

  generateTypes(dialect: TypeScriptDialect): string {
    const template = this.templates.get('types');
    if (!template) {
      throw new Error('Types template not found');
    }
    return template(dialect);
  }

  generateEnums(dialect: TypeScriptDialect): string {
    const template = this.templates.get('enums');
    if (!template) {
      throw new Error('Enums template not found');
    }
    return template(dialect);
  }

  generateMessages(dialect: TypeScriptDialect): string {
    const template = this.templates.get('messages');
    if (!template) {
      throw new Error('Messages template not found');
    }
    return template(dialect);
  }

  generateIndex(dialect: TypeScriptDialect, includeEnums: boolean = false): string {
    const template = this.templates.get('index');
    if (!template) {
      throw new Error('Index template not found');
    }
    return template({ ...dialect, includeEnums });
  }

  generateSingle(dialect: TypeScriptDialect): string {
    const template = this.templates.get('single');
    if (!template) {
      throw new Error('Single template not found');
    }
    return template(dialect);
  }

  generateDecoder(dialect: TypeScriptDialect): string {
    const template = this.templates.get('decoder');
    if (!template) {
      throw new Error('Decoder template not found');
    }
    return template(dialect);
  }

}
