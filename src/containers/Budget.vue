<template>
  <div>
    <main>
      <topbar pageTitle="Budget Calculator">
        <main-menu></main-menu>
      </topbar>
      <div class="main__content">
        <div class="container">
          <div class="row">
            <div class="col col--1-large">
              <vv-card-image-banner bannerImage="LBS_campus_2.jpg" mainHeading="LBS" subHeading="EMBA" class="vv-card-image-banner--overlay-left">
              </vv-card-image-banner>
            </div>
          </div>
          <div class="row">
            <div class="col col--1/2-large">
              <vv-card>
                <vv-card-header title="EMBA - EMBALJ2019 (GBP)"></vv-card-header>
                <vv-card-content>
                  You have applied for a loan for 1st Year of
                  <strong>EMBALJ2019 (GBP) at London Business School</strong>. Please tell us how you intend to finance your full
                  study period.
                </vv-card-content>

                <vv-card-content>
                  <table class="vv-table vv-table-information">
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Cost of Attendance For Your Full Course</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">{{ coaFc }}</td>
                    </tr>
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Cost of Attendance For Application Year</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">{{ coaAy }}</td>
                    </tr>
                  </table>
                </vv-card-content>
              </vv-card>

              <vv-card>
                <vv-card-content>
                  Please Enter the Money you have access to.
                </vv-card-content>

                <vv-card-content>
                  <table class="vv-table vv-table-information">
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Scholarships</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">
                        <input type="text" placeholder="0" class="vv-input" v-model="scholarships" />
                      </td>
                    </tr>
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Other Loans</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">
                        <input type="text" placeholder="0" class="vv-input" v-model="otherLoans" />
                      </td>
                    </tr>
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Loan from Prodigy</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">
                        <input type="text" placeholder="0" class="vv-input" v-model="prodigyLoans" />
                      </td>
                    </tr>
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Savings</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">
                        <input type="text" placeholder="0" class="vv-input" v-model="savings" />
                      </td>
                    </tr>

                  </table>
                </vv-card-content>
              </vv-card>
            </div>
            <div class="col col--1/2-large">
              <vv-card>
                <vv-card-header title="budget summary"></vv-card-header>

                <vv-card-content>
                  <table class="vv-table vv-table-information">
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Scholarships</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">{{ scholarships }}</td>
                    </tr>
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Other Loans</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">{{ otherLoans }}</td>
                    </tr>
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Loans from Prodigy Finance</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">{{ prodigyLoans }}</td>
                    </tr>
                    <tr class="vv-table__tr">
                      <td class="vv-table__td">Savings</td>
                      <td class="vv-table__td vv-table--align-right vv-table--td-bold">{{ savings }}</td>
                    </tr>
                  </table>
                </vv-card-content>

                <vv-card-footer>
                  <div class="row">
                    <div class="col col--1-small">
                      <table class="vv-table vv-table-information">
                        <tr class="vv-table__tr" v-bind:class="statusClass">
                          <td class="vv-table__td">OUTSTANDING BALANCE</td>
                          <td class="vv-table__td vv-table--align-right vv-table--td-bold">
                            {{ outstandingBalance }}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </vv-card-footer>
                <vv-card-content v-if="showSubmit">
                  <div class="row row--align-right">
                    <div class="col col--1/2-large">
                      <vv-button text="save &amp; next" class="vv-button--teal vv-button--outline vv-button--fluid vv-button--round"></vv-button>
                    </div>
                  </div>
                </vv-card-content>
              </vv-card>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import vvButton from '../components/vv-Button';
  import Topbar from '../containers/Topbar';
  import MainMenu from '../containers/Menu';
  import vvCard from '../components/card/vv-Card';
  import vvCardHeader from '../components/card/vv-CardHeader';
  import vvCardContent from '../components/card/vv-CardContent';
  import vvCardFooter from '../components/card/vv-CardFooter';
  import vvCardImageBanner from '../components/card/vv-CardImageBanner';

  export default {
    name: 'Budget',
    components: {
      vvButton,
      Topbar,
      MainMenu,
      vvCard,
      vvCardHeader,
      vvCardContent,
      vvCardFooter,
      vvCardImageBanner,
    },
    data() {
      return {
        pageTitle: 'Budget Calculator',
        scholarships: '',
        otherLoans: '',
        prodigyLoans: '',
        savings: '',
        coaFc: 136756,
        coaAy: 44879,
        statusClass: 'vv-status--bad',
        showSubmit: false,
      };
    },
    computed: {
      outstandingBalance() {
        const amount = this.coaFc - (this.checkNan(this.scholarships) +
                                     this.checkNan(this.otherLoans) +
                                     this.checkNan(this.prodigyLoans) +
                                     this.checkNan(this.savings));

        return this.normalizeAmount(amount);
      },
    },

    watch: {
      outstandingBalance(value) {
        const budgetMet = value === 0;
        this.statusClass = budgetMet ? 'vv-status--good' : 'vv-status--bad';
        this.showSubmit = budgetMet;
      },
    },

    methods: {
      checkNan(value) {
        const num = parseFloat(value);
        return isNaN(num) ? 0 : num;
      },

      normalizeAmount(value) {
        const amount = value < 0 ? 0 : value;
        return amount;
      },
    },
  };

</script>
