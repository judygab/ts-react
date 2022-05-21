import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ComponentExamples from "../../../docs/component-examples.md";
import CodeBlock from '@theme/CodeBlock';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

const codeSnippetsList = [
  {
    title: 'Functional Component with Types',
    description: (
      <>
      In TypeScript, Functional components that have Props, require their Props to be typed. There\s
      several ways of declaring their types and creating a new Type specifially for component props is one of them:
      </>
    ),
    codeBlock:  (`
      type CardProps = {
        title: string,
        description: string
      }

      export const Card = ({ title, description }: CardProps) => <div>
        <h2>{ title }</h2>
        <p>
          { description }
        </p>
      </div>
      `)
  },
  {
    title: 'Functional Component with Types and Defaults',
    description: (
      <>
        Some or all props can be optional by adding question mark in the prop type definition. We can also
        pass them a default value by doing the following:
      </>
    ),
    codeBlock: `
    type CardProps = {
      title: string,
      description?: string  // the description is optional
    }

    export const Card: FunctionComponent<CardProps> = ({ title = "Hello", description }) =>
      <div>
        <h2>{ title }</h2>
        <p>
          { description }
        </p>
      </div>
    `
  },
  {
    title: 'Functional Component with Typed Properties',
    description: (
      <>
        We don't have to create a new type for every Props, we can also type them in-place inside the components.
        Here's an example:
      </>
  ),
  codeBlock: (
    `
    export const Button: FunctionComponent<CardProps> = ({ title, onClick } : {
      title: string,
      onClick: () => void
    }) =>
      <button onClick={onClick}>{title}</button>
    `
  )
  },
  {
    title: 'Common Hooks',
    description: (
      <>
        Let's see how some of the common hooks in React can be typed:
      </>
    ),
    codeBlock: (
      `
      const [isOpen, setIsOpen] = useState<boolean>(false);
      const [users, setUsers] = useState<IUser[] >([]);
      `
    )
  },
  {
    title: 'Custom Hooks',
    description: (
      <>In custom hooks, we have to keep in mind that we need to also define return types. Since we return
      one or more elements in the array, if we don't properly define each element type in order,
      we will get a Type Error, because TypeScript assumes all elements of the array to be of the same type,
      unless explicitely declared.
      </>
  ),
    codeBlock:
        (
          `
          import { useState } from "react";

          export const useToggle = (): [boolean, () => void] => {
            const [toggleOn, setToggleOn] = useState<boolean>(false);
            const updateToggle = () => {
              setToggleOn((prevToggleOn) => !prevToggleOn);
            };
            return [toggleOn, updateToggle];
          };
          `
        )
  }
]

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Paragraph({title, description, codeBlock}) {
  return (
    <div className="row text--center">
      <div className="col">
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="text--left">
            <CodeBlock language="tsx">{codeBlock}</CodeBlock>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          {
            codeSnippetsList.map((props, idx) => (
              <Paragraph key={idx} {...props} />
            ))
          }
        </div>
      </div>
    </section>
  );
}
