import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeSection: 'home',
  skillsFilter: 'all',
  skillsSearchQuery: '',
  projectsFilter: 'all',
  selectedProject: null,
  isProjectModalOpen: false,
  isResumeModalOpen: false,
  isMobileMenuOpen: false,
  contactForm: {
    status: 'idle', // 'idle' | 'submitting' | 'success' | 'error'
    errorMessage: '',
  },
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
    setSkillsFilter: (state, action) => {
      state.skillsFilter = action.payload;
    },
    setSkillsSearchQuery: (state, action) => {
      state.skillsSearchQuery = action.payload;
    },
    setProjectsFilter: (state, action) => {
      state.projectsFilter = action.payload;
    },
    openProjectModal: (state, action) => {
      state.selectedProject = action.payload;
      state.isProjectModalOpen = true;
    },
    closeProjectModal: (state) => {
      state.selectedProject = null;
      state.isProjectModalOpen = false;
    },
    openResumeModal: (state) => {
      state.isResumeModalOpen = true;
    },
    closeResumeModal: (state) => {
      state.isResumeModalOpen = false;
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    setMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload;
    },
    setContactFormStatus: (state, action) => {
      state.contactForm.status = action.payload.status;
      state.contactForm.errorMessage = action.payload.errorMessage || '';
    },
    resetContactForm: (state) => {
      state.contactForm.status = 'idle';
      state.contactForm.errorMessage = '';
    },
  },
});

export const {
  setActiveSection,
  setSkillsFilter,
  setSkillsSearchQuery,
  setProjectsFilter,
  openProjectModal,
  closeProjectModal,
  openResumeModal,
  closeResumeModal,
  toggleMobileMenu,
  setMobileMenuOpen,
  setContactFormStatus,
  resetContactForm,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;

