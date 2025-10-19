---
description: Create UI Component.
argument-hint: Component Name | Component Summary
---

## Variation
- create few variation of component; for example size, colour, styling.

## Testing
- Make a test file for the component to test basic use cases.
- Run tests and iterate until all passes.

## Preview

- add the component to app/preview/page.tsx for preview so it can be viewed in the browers.
- do not add file in any other directory except app/preview/

# Context
Parse $Arguments to get the following values:
- [name]: Component name from  $Argument, converted to Camel case
- [summary]: Component summary from $Argument

## Task

Make a single UI Component following below points:
- create component file in `components/ui/[name]/[name].tsx` folder
- use the name from [name] $Argument to name the Component.
- use [summary] $Argument as refernce while creating the component.


## Review the work
- Invoke the ui-ux-playwright-reviewer sub-agent to review the newly created component
# When a new component is created, review the component and provide feedback