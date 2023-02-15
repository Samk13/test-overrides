import { CommunityHeaderOverride } from './components'

export const overriddenComponents = {
    'InvenioAppRdm.Deposit.CommunityHeader.layout': () => null,
    'InvenioAppRdm.Deposit.AccordionFieldBasicInformation.layout': CommunityHeaderOverride
}
