### Getting Started
Run `npm install; nomo run dev` and that should start a server on port 8080.
Open the app and navigate to 'budget' in the topbar.

The file you will be modifying is 'src/containers/Budget.vue'
Everytime you save, the program recompiles and updates/refreshes the page.

### Issue 1
Currently the page is set up to accept input from the user,
but when the user enters a number, the corresponding field
in the Budget summary isn't updated.

### Issue 2
Now that the user can see Budget summary being updated, they
can't tell how much money is left to make budget. Fix the
outstanding amount computed method so that it calculates and
displays how much money is left.

### Issue 3
Now that Outstanding amount is being updated, we need to add
some cool-ish dynamic things to the page when the budget has been met.
Lets make sure that the outstading amount block changes color from
red to teal when the budget has been met, and that the submit button
appears. Hint: Use the watcher.

'vv-status--bad' needs to change to 'vv-status--good'
Use `v-if` and showStatus attribute to show the submit button


And that is it... #BudgetPageNeedsVue

PS: A working solution is in the branch `feature/budget-calculator`
