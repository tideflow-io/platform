import { AutoForm } from "meteor/aldeed:autoform"
import { Router } from 'meteor/iron:router'

// ***************************************************************
// AUTOFORM HOOKS
// ***************************************************************

// Shows a simple message and re-routes if successful
AutoForm.addHooks(['updateChannelForm'], {
  after: {
    method: (error, result) => {
      
    }
  }
})