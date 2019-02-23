import { AutoForm } from "meteor/aldeed:autoform"
import { Router } from 'meteor/iron:router'

// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Shows a simple message and re-routes if successful
AutoForm.addHooks(['insertChannelForm'], {
  after: {
    method: (error, result) => {
      console.log({result})
      Router.go('channels.one.edit', result)
    }
  }
})