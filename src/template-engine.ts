import Handlebars from 'handlebars';
import { TypeScriptDialect } from './types';

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
  content: Content;
}

{{#each enums}}
{{#each description}}
// {{ this }}
{{/each}}
export type {{ name }} =
{{#each values}}
  | '{{ name }}'{{#if description}} // {{ join description " " }}{{/if}}
{{/each}}
  | string;

{{/each}}

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
  {{ name }} = '{{ name }}',
{{/each}}
}

export type {{ name }} =
{{#each values}}
  | '{{ name }}'{{#if description}} // {{ join description " " }}{{/if}}
{{/each}}
  | string;

{{/each}}
`));

    // Messages template
    this.templates.set('messages', Handlebars.compile(`// Auto-generated TypeScript message interfaces for {{ dialectName }} dialect

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
  content: Content;
}

// Enums
{{#each enums}}
{{#each description}}
// {{ this }}
{{/each}}
export type {{ name }} =
{{#each values}}
  | '{{ name }}'{{#if description}} // {{ join description " " }}{{/if}}
{{/each}}
  | string;

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

  generateIndex(dialect: TypeScriptDialect): string {
    const template = this.templates.get('index');
    if (!template) {
      throw new Error('Index template not found');
    }
    return template(dialect);
  }

  generateSingle(dialect: TypeScriptDialect): string {
    const template = this.templates.get('single');
    if (!template) {
      throw new Error('Single template not found');
    }
    return template(dialect);
  }
}