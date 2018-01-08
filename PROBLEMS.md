### Getting Started
Get VueJS Devtools for your browser.
Chrome VueJs DevTools:
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
Firefox VueJs DevTools:
https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/

Install NPM: `brew install node`
Run `npm install; npm run dev` and that should start a server on port `8080`.
Open the app and navigate to 'budget' in the topbar.

The file you will be modifying is `src/containers/Budget.vue`
Everytime you save, the program recompiles and updates/refreshes the page.

### Issue 1
Currently the page is set up to accept input from the user,
but when the user enters a number, the corresponding field
in the Budget summary isn't updated.

### Issue 2
Now that the user can see Budget summary being updated, they
can't tell how much money is left to make budget i.e Outstanding Amount == 0.

Fix the outstanding amount `computed` method(line 173) so that it calculates and
displays how much money is still outstanding.

Also make sure that that Outstanding amount can't go below 0 (negative).

### Issue 3
Now that Outstanding amount is being updated, we need to add
some cool-ish dynamic things to the page when the budget has been met.

Lets make sure that the outstanding amount block changes color from
`red` to `teal` when the budget has been met, and that the submit button
appears. Hint: Use the watcher.

`vv-status--bad` needs to change to `vv-status--good`
Use `v-if` and showStatus attribute to show the submit button


And that is it... #BudgetPageNeedsVue

PS: A working solution is in the branch `feature/budget-calculator`
