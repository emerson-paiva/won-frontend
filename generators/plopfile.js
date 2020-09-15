module.exports = function (plop) {
  // component generator
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
        templateFile: 'templates/spec.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      }
    ]
  })
}
