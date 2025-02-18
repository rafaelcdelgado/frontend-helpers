# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2022-06-15

- Link helpers were removed.

## [1.1.0] - 2022-06-14

- `NavbarController` was removed.

## [1.0.1] - 2022-06-13

- Added `icon-component` css class to `icon_tag` helper method.

## [1.0.0] - 2022-06-13

- Removed unused Icon CSS

## [0.8.0] - 2022-06-10

- `fe_modal.scss`, `RemoteDrawerController`, `RemoteModalController` were removed. Methods using `RemoteDrawerController` and `RemoteModalController` were updated to use `DrawerController` and `ModalController`from `Bali View Component`.

## [0.7.0] - 2022-06-08

- Removed most of the icons in `icon_components` and the `link_with_icon` method.

## [0.6.4] - 2022-06-08

- Make parent object accessible in dynamic fields template

## [0.6.3] - 2022-06-07

- Formatting icon components to avoid lookbook errors.

## [0.6.2] - 2022-05-17

- Add 'whatsapp' and 'whatsapp-square' icon

## [0.6.1] - 2022-05-23

- Enhance `InputOnChangeController` to support sending an array of values from a SlimSelect instance.

## [0.6.0] - 2022-05-23

- Add `auto_submit_select` helper method to automatically send a server request when a select_field
  changes it's value.

## [0.5.28] - 2022-05-19

- Fix class of `download` icon.

## [0.5.27] - 2022-05-18

- Add `download` icon.

## [0.5.26] - 2022-05-17

- Display datepicker with correct language.

## [0.5.25] - 2022-05-05

- Add `magic wand` icon.

## [0.5.24] - 2022-05-05

- Add WYIWYG icons. `table`, `bold`, `italic`, `strikethrough`, `underline` and `link`

## [0.5.23] - 2022-05-04

- Fixed `datefield` error display

## [0.5.22] - 2022-04-12

- Add `flex position` in date_field input in mobile version

## [0.5.21] - 2022-04-12

- Add `buttons previous and next` in date_field helper

## [0.5.20] - 2022-04-07

- Add `closeOnClick` option to `dropdown-controller` to optionally disable closing it down on click

## [0.5.19] - 2022-04-05

- Trigger `Turbo` when submit a form with `submit-on-change` controller.

## [0.5.18] - 2022-04-05

- Add `Twitter, Github and Linkedin` icons.

## [0.5.17] - 2022-03-28

- Add `arrow-right-up` icon.

## [0.5.16] - 2022-03-28

- Added `sortable controller` to reorder lists with drag-and-drop.

## [0.5.15] - 2022-03-16

- Add `file-signature` icon.

## [0.5.14] - 2022-03-10

- Add `square-phone` icon.

## [0.5.13] - 2022-03-09

- Fix flatpickr to version 4.6.9, since 4.6.10 introduces a bug on the time selector

## [0.5.12] - 2022-02-22

- Include radio input tag styles to display them as a list

## [0.5.11] - 2022-02-21

- Add `trix-attachments` controller.

## [0.5.10] - 2022-02-14

- Fix `date_field` error message display.

## [0.5.9] - 2022-02-02

- Add `trix-content` class automatically to `rich_text_area_group`.

## [0.5.8] - 2022-02-02

- Add `rich_text_area_group` helper.

## [0.5.7] - 2022-01-26

- Use Popper.js for positioning the hovercard

## [0.5.6] - 2022-01-26

- Add new properties `close_on_select` and `allow_deselect_option` to `slim_select_field` method.

## [0.5.5] - 2022-01-26

- Enable template rendering in the hovercard. When an url value is given the hovercard will display the request response. Also, when a template target is given the hovercard will display the innerHTML of the template target.

## [0.5.4] - 2022-01-07

- Add `alert-alt` icon.

## [0.5.3] - 2022-01-07

- Use popper.js to position Popup since it handles all scenarios for different screens

## [0.5.2] - 2022-01-06

- Add external-link-alt icon

## [0.5.1] - 2021-12-23

- Defined variable for notification controller without default value

## [0.5.0] - 2021-12-19

#### Upgrade to Stimulus 3 for:

- New Values API with defaults
- Target changes callbacks
- Action Parameters
- Reference new @hotwired/stimulus package

#### Other changes

- Remove phone_input (it wasn't being used)
- Remove stimulus-use and create a utility for useOutsideClick. (it was the only stimulus-use utility we were using, since we don't need the useTargetMutation anymore)
- Move all Peer Dependencies to Dependencies
- Add isElementInViewport function required for useOutsideClick

## [0.4.29] - 2021-12-16

- Relax Rails version to be able to install Rails 7

## [0.4.28] - 2021-12-13

- Modify `remote-modal` Controller to remove wrapper class when modal is used as a flash.

## [0.4.26] - 2021-12-08

- Add style via `image-preview` controller

## [0.4.25] - 2021-12-06

- Correctly serialize a TimeValue string number

## [0.4.24] - 2021-12-02

- add `image-preview` controller

## [0.4.23] - 2021-11-29

- add `camera` icon

## [0.4.22] - 2021-11-24

- add `file-certificate` icon and `active_li` helper

## [0.4.21] - 2021-11-24

- `switch_field_group` accepts a block to use it as label

## [0.4.20] - 2021-11-22

- Updated modal width sizes

## [0.4.19] - 2021-11-22

- Updated fe_carousel file to center the images in the carousel component

## [0.4.18] - 2021-11-17

- Added new sizes for the modal (small, wide and extra-wide) and an alternative icon to info_circle

## [0.4.17] - 2021-11-19

- Add `switch_field_group` and `switch_field` to `FormBuilder`.

## [0.4.16] - 2021-11-17

- Add `comment-dollar`, `laptop-code`and `users` icons.

## [0.4.15] - 2021-11-14

- Add `angle-double-down`, `angle-double-up`, `search-minus` and `search-plus` icons.

## [0.4.14] - 2021-11-12

- Update `datepicker` default language to Spanish.

## [0.4.13] - 2021-11-12

- Add `ElementsOverlapController`.

## [0.4.12] - 2021-11-12

- Add `lodash.throttle`.

## [0.4.11] - 2021-11-12

- Add `baby`and `info-circle` icons and update `poo` icon.

## [0.4.10] - 2021-11-10

- Add `clock` icon.

## [0.4.9] - 2021-11-08

- Create Carousel controller

## [0.4.8] - 2021-11-05

- Add `truck-loading`, `tags`, `space-station-moon-alt` icons.

## [0.4.7] - 2021-11-04

- Add `edit-alt`, `trash-alt`, `pin`, `bookmark` icons.

## [0.4.6] - 2021-11-02

- Accept chartkick.js options in ChartController

## [0.4.5] - 2021-11-01

- Modify 'active_path?' method to ignore .html extension on the request

## [0.4.4] - 2021-10-27

- Update fe_icons.scss to change icon size

## [0.4.3] - 2021-10-19

- Adjust slim-select styles to use app's primary color

## [0.4.2] - 2021-10-18

- Add icon pop and images

## [0.4.1] - 2021-10-18

- Add `mastercard`, `visa`, `american express` icons

## [0.4.0] - 2021-10-18

- Remove all the select related stuff that we don't need anymore!

## [0.3.35] - 2021-10-18

- Modify submit_actions to accepts `label` in cancel_options params

## [0.3.34] - 2021-10-18

- Modified active_link_with_icon to add a class to 'name' attribute.

## [0.3.33] - 2021-10-15

- Create new slim_select_field/slim_select_group to replace other JS based select helpers

## [0.3.32] - 2021-10-15

- Add `FilterFormController`, `PopupController`, `SelectedController`.
- Fix navbar styling issue in touch devices when it is transparent.

## [0.3.31] - 2021-10-11

- Add FrontendHelpers module to IconComponents

## [0.3.30] - 2021-10-11

- Add active_link_with_icon method and modify icons filling

## [0.3.29] - 2021-10-11

- Add icons 'business', 'credit-card-alt', 'cutlery-alt', 'dashboard' and 'face-profile'

## [0.3.28] - 2021-10-11

- Adjust size of icons

## [0.3.27] - 2021-10-08

- Add store, lightbulb, project-diagram and chart-line icons

## [0.3.26] - 2021-10-06

- Allow to specify delay to make the request on SubmitOnChangeController

## [0.3.25] - 2021-10-07

- Add icons for daycare application

## [0.3.24] - 2021-10-06

- Allow to specify method and responseKind on SubmitOnChangeController

## [0.3.23] - 2021-10-01

- Repalace '-', '+' for icons in step number field.

## [0.3.22] - 2021-09-30

- Improve navbar transparency for tablets and mobile devices.

## [0.3.21] - 2021-09-29

- Add child icon

## [0.3.20] - 2021-09-20

- Improve filter form to support array attributes and remove tenant dependency

## [0.3.19] - 2021-09-19

- Add filter icon

## [0.3.18] - 2021-09-18

- Add search_field_group form tag builder

## [0.3.17] - 2021-09-14

- Updated hovercard controller to improve hovercard positioning

## [0.3.16] - 2021-09-10

- Updated `link_to_remove_fields` method to optionally receive soft_delete attribute.

## [0.3.15] - 2021-08-29

- Add `transparency funcionality` to navbar.

## [0.3.14] - 2021-08-29

- Add `facebook, instagram, pinterest, linkedin, mail, phone, map_marker_alt` icons.

## [0.3.13] - 2021-08-29

- Add `manual closing` to notifications

## [0.3.12] - 2021-08-29

- Add times icon

## [0.3.11] - 2021-08-29

- Add notification (alert, success, notification) icons

## [0.3.10] - 2021-08-29

- Pass options to ransack result method

## [0.3.9] - 2021-08-26

- Add `arrow-forward` and `arrow-back` icons

## [0.3.8] - 2021-08-24

- Adding `hoverable` to dropdown, that allows trigger it by hover

## [0.3.7] - 2021-08-21

- Create RadioToggleController

## [0.3.6] - 2021-08-17

- Extend InputOnChange Controller to add the ability to:
  - Change the key sent to the server
  - Sent a target_id for the element to update

## [0.3.5] - 2021-08-09

- Adding Print Controller, that allows to print the current page

## [0.3.4] - 2021-08-05

- Allow timefield to receive a minimun, maximum and default time. And datefield can now receive a minimum date

## [0.3.3] - 2021-08-04

- Create new InputOnChangeController to notify the server when there is some change in the input

## [0.3.2] - 2021-08-03

- Create new ToggleController to toggle content on and off based on the value of a checkbox

## [0.3.1] - 2021-08-03

- Allow boolean_field to receive check_box checked and unchecked values

## [0.3.0] - 2021-07-22

- Include FilterForm object to simplify adding filters to a data table

## [???]

- Add calendar-alt icon
- Add `autoFocusInput` to automatically focus elements in form with `autofocus="autofocus"`
- Fix: Clicking on tag-input results would render `undefined`
- Generate component docs using Markdown
- Skip Choices.js initialization when element already initialized.
- Setup linting for Ruby (Rubocop) and Javascript (StandardJS) with Github Actions

## [0.2.1] - 2021-03-15

### Added

- New notification component with dismiss behaviour
