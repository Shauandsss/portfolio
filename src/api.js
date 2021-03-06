/* eslint-disable import/no-anonymous-default-export */
const API_BASE = " https://api.github.com/";
const GIT_USER = "shauandsss";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getListRepos: async () => {
    return [
      {
        slug: "repos",
        items: [
          {
            id: 361175577,
            node_id: "MDEwOlJlcG9zaXRvcnkzNjExNzU1Nzc=",
            name: "Alset",
            full_name: "Shauandsss/Alset",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/Alset",
            description: null,
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/Alset",
            forks_url: "https://api.github.com/repos/Shauandsss/Alset/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/Alset/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/Alset/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/Shauandsss/Alset/teams",
            hooks_url: "https://api.github.com/repos/Shauandsss/Alset/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/Alset/issues/events{/number}",
            events_url: "https://api.github.com/repos/Shauandsss/Alset/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/Alset/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/Alset/branches{/branch}",
            tags_url: "https://api.github.com/repos/Shauandsss/Alset/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/Alset/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/Alset/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/Alset/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/Alset/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/Alset/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/Alset/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/Alset/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/Alset/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/Alset/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/Alset/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/Alset/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/Alset/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/Alset/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/Alset/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/Alset/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/Alset/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/Shauandsss/Alset/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/Alset/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/Alset/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/Alset/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/Alset/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/Alset/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/Alset/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/Alset/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/Alset/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/Alset/deployments",
            created_at: "2021-04-24T13:57:22Z",
            updated_at: "2021-04-24T19:46:54Z",
            pushed_at: "2021-04-26T18:50:08Z",
            git_url: "git://github.com/Shauandsss/Alset.git",
            ssh_url: "git@github.com:Shauandsss/Alset.git",
            clone_url: "https://github.com/Shauandsss/Alset.git",
            svn_url: "https://github.com/Shauandsss/Alset",
            homepage: null,
            size: 98,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 296880019,
            node_id: "MDEwOlJlcG9zaXRvcnkyOTY4ODAwMTk=",
            name: "BitCoinA100K.Java",
            full_name: "Shauandsss/BitCoinA100K.Java",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/BitCoinA100K.Java",
            description: null,
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java",
            forks_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/BitCoinA100K.Java/deployments",
            created_at: "2020-09-19T13:53:30Z",
            updated_at: "2020-09-30T01:14:28Z",
            pushed_at: "2020-09-30T01:14:26Z",
            git_url: "git://github.com/Shauandsss/BitCoinA100K.Java.git",
            ssh_url: "git@github.com:Shauandsss/BitCoinA100K.Java.git",
            clone_url: "https://github.com/Shauandsss/BitCoinA100K.Java.git",
            svn_url: "https://github.com/Shauandsss/BitCoinA100K.Java",
            homepage: null,
            size: 4697,
            stargazers_count: 0,
            watchers_count: 0,
            language: "Java",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 317477977,
            node_id: "MDEwOlJlcG9zaXRvcnkzMTc0Nzc5Nzc=",
            name: "Calculator---onlyHtml",
            full_name: "Shauandsss/Calculator---onlyHtml",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/Calculator---onlyHtml",
            description: "Simple Calculator",
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml",
            forks_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/Calculator---onlyHtml/deployments",
            created_at: "2020-12-01T08:42:18Z",
            updated_at: "2020-12-01T08:42:33Z",
            pushed_at: "2020-12-01T08:42:31Z",
            git_url: "git://github.com/Shauandsss/Calculator---onlyHtml.git",
            ssh_url: "git@github.com:Shauandsss/Calculator---onlyHtml.git",
            clone_url:
              "https://github.com/Shauandsss/Calculator---onlyHtml.git",
            svn_url: "https://github.com/Shauandsss/Calculator---onlyHtml",
            homepage: null,
            size: 0,
            stargazers_count: 0,
            watchers_count: 0,
            language: "HTML",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "main",
          },
          {
            id: 317475997,
            node_id: "MDEwOlJlcG9zaXRvcnkzMTc0NzU5OTc=",
            name: "doomFire-Deschamps-",
            full_name: "Shauandsss/doomFire-Deschamps-",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/doomFire-Deschamps-",
            description: "Doom Fire - html & CSS.",
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-",
            forks_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/doomFire-Deschamps-/deployments",
            created_at: "2020-12-01T08:35:16Z",
            updated_at: "2020-12-01T08:35:49Z",
            pushed_at: "2020-12-01T08:35:47Z",
            git_url: "git://github.com/Shauandsss/doomFire-Deschamps-.git",
            ssh_url: "git@github.com:Shauandsss/doomFire-Deschamps-.git",
            clone_url: "https://github.com/Shauandsss/doomFire-Deschamps-.git",
            svn_url: "https://github.com/Shauandsss/doomFire-Deschamps-",
            homepage: null,
            size: 1,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "main",
          },
          {
            id: 317811010,
            node_id: "MDEwOlJlcG9zaXRvcnkzMTc4MTEwMTA=",
            name: "FaceDetection-wIarduino",
            full_name: "Shauandsss/FaceDetection-wIarduino",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/FaceDetection-wIarduino",
            description: null,
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino",
            forks_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/FaceDetection-wIarduino/deployments",
            created_at: "2020-12-02T09:25:04Z",
            updated_at: "2020-12-02T09:26:25Z",
            pushed_at: "2020-12-02T09:26:21Z",
            git_url: "git://github.com/Shauandsss/FaceDetection-wIarduino.git",
            ssh_url: "git@github.com:Shauandsss/FaceDetection-wIarduino.git",
            clone_url:
              "https://github.com/Shauandsss/FaceDetection-wIarduino.git",
            svn_url: "https://github.com/Shauandsss/FaceDetection-wIarduino",
            homepage: null,
            size: 15532,
            stargazers_count: 0,
            watchers_count: 0,
            language: "C#",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "main",
          },
          {
            id: 322542389,
            node_id: "MDEwOlJlcG9zaXRvcnkzMjI1NDIzODk=",
            name: "Gefion",
            full_name: "Shauandsss/Gefion",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/Gefion",
            description: "Gefion-Project",
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/Gefion",
            forks_url: "https://api.github.com/repos/Shauandsss/Gefion/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/Gefion/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/Gefion/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/Shauandsss/Gefion/teams",
            hooks_url: "https://api.github.com/repos/Shauandsss/Gefion/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/Gefion/issues/events{/number}",
            events_url: "https://api.github.com/repos/Shauandsss/Gefion/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/Gefion/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/Gefion/branches{/branch}",
            tags_url: "https://api.github.com/repos/Shauandsss/Gefion/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/Gefion/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/Gefion/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/Gefion/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/Gefion/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/Gefion/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/Gefion/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/Gefion/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/Gefion/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/Gefion/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/Gefion/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/Gefion/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/Gefion/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/Gefion/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/Gefion/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/Gefion/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/Gefion/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/Shauandsss/Gefion/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/Gefion/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/Gefion/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/Gefion/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/Gefion/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/Gefion/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/Gefion/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/Gefion/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/Gefion/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/Gefion/deployments",
            created_at: "2020-12-18T09:01:13Z",
            updated_at: "2021-04-17T03:50:30Z",
            pushed_at: "2021-04-16T08:32:08Z",
            git_url: "git://github.com/Shauandsss/Gefion.git",
            ssh_url: "git@github.com:Shauandsss/Gefion.git",
            clone_url: "https://github.com/Shauandsss/Gefion.git",
            svn_url: "https://github.com/Shauandsss/Gefion",
            homepage: null,
            size: 47496,
            stargazers_count: 0,
            watchers_count: 0,
            language: "Python",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "main",
          },
          {
            id: 356111099,
            node_id: "MDEwOlJlcG9zaXRvcnkzNTYxMTEwOTk=",
            name: "KruskalJs",
            full_name: "Shauandsss/KruskalJs",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/KruskalJs",
            description: "Visual Kruskal JavaScript React",
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/KruskalJs",
            forks_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/branches{/branch}",
            tags_url: "https://api.github.com/repos/Shauandsss/KruskalJs/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/KruskalJs/deployments",
            created_at: "2021-04-09T02:36:16Z",
            updated_at: "2021-06-22T09:01:20Z",
            pushed_at: "2021-06-22T09:01:38Z",
            git_url: "git://github.com/Shauandsss/KruskalJs.git",
            ssh_url: "git@github.com:Shauandsss/KruskalJs.git",
            clone_url: "https://github.com/Shauandsss/KruskalJs.git",
            svn_url: "https://github.com/Shauandsss/KruskalJs",
            homepage: null,
            size: 1002,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 378557012,
            node_id: "MDEwOlJlcG9zaXRvcnkzNzg1NTcwMTI=",
            name: "lart",
            full_name: "Shauandsss/lart",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/lart",
            description: null,
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/lart",
            forks_url: "https://api.github.com/repos/Shauandsss/lart/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/lart/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/lart/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/Shauandsss/lart/teams",
            hooks_url: "https://api.github.com/repos/Shauandsss/lart/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/lart/issues/events{/number}",
            events_url: "https://api.github.com/repos/Shauandsss/lart/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/lart/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/lart/branches{/branch}",
            tags_url: "https://api.github.com/repos/Shauandsss/lart/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/lart/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/lart/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/lart/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/lart/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/lart/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/lart/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/lart/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/lart/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/lart/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/lart/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/lart/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/lart/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/lart/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/lart/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/lart/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/lart/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/Shauandsss/lart/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/lart/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/lart/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/lart/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/lart/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/lart/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/lart/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/lart/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/lart/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/lart/deployments",
            created_at: "2021-06-20T04:22:06Z",
            updated_at: "2021-06-22T08:54:59Z",
            pushed_at: "2021-06-22T08:55:14Z",
            git_url: "git://github.com/Shauandsss/lart.git",
            ssh_url: "git@github.com:Shauandsss/lart.git",
            clone_url: "https://github.com/Shauandsss/lart.git",
            svn_url: "https://github.com/Shauandsss/lart",
            homepage: null,
            size: 3520,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 461321687,
            node_id: "R_kgDOG3811w",
            name: "myDrugs",
            full_name: "Shauandsss/myDrugs",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/myDrugs",
            description: null,
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/myDrugs",
            forks_url: "https://api.github.com/repos/Shauandsss/myDrugs/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/Shauandsss/myDrugs/teams",
            hooks_url: "https://api.github.com/repos/Shauandsss/myDrugs/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/branches{/branch}",
            tags_url: "https://api.github.com/repos/Shauandsss/myDrugs/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/myDrugs/deployments",
            created_at: "2022-02-19T21:50:39Z",
            updated_at: "2022-02-19T21:51:01Z",
            pushed_at: "2022-02-20T00:54:26Z",
            git_url: "git://github.com/Shauandsss/myDrugs.git",
            ssh_url: "git@github.com:Shauandsss/myDrugs.git",
            clone_url: "https://github.com/Shauandsss/myDrugs.git",
            svn_url: "https://github.com/Shauandsss/myDrugs",
            homepage: null,
            size: 8966,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 358773673,
            node_id: "MDEwOlJlcG9zaXRvcnkzNTg3NzM2NzM=",
            name: "NetflixClone",
            full_name: "Shauandsss/NetflixClone",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/NetflixClone",
            description: "Netflix Clone with ReactJs",
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/NetflixClone",
            forks_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/NetflixClone/deployments",
            created_at: "2021-04-17T03:16:39Z",
            updated_at: "2021-04-17T03:48:33Z",
            pushed_at: "2021-04-17T03:51:35Z",
            git_url: "git://github.com/Shauandsss/NetflixClone.git",
            ssh_url: "git@github.com:Shauandsss/NetflixClone.git",
            clone_url: "https://github.com/Shauandsss/NetflixClone.git",
            svn_url: "https://github.com/Shauandsss/NetflixClone",
            homepage: null,
            size: 515,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 459334050,
            node_id: "R_kgDOG2Dhog",
            name: "portfolio",
            full_name: "Shauandsss/portfolio",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/portfolio",
            description: null,
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/portfolio",
            forks_url:
              "https://api.github.com/repos/Shauandsss/portfolio/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/portfolio/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/portfolio/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/portfolio/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/portfolio/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/portfolio/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/portfolio/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/portfolio/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/portfolio/branches{/branch}",
            tags_url: "https://api.github.com/repos/Shauandsss/portfolio/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/portfolio/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/portfolio/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/portfolio/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/portfolio/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/portfolio/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/portfolio/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/portfolio/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/portfolio/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/portfolio/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/portfolio/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/portfolio/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/portfolio/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/portfolio/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/portfolio/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/portfolio/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/portfolio/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/portfolio/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/portfolio/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/portfolio/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/portfolio/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/portfolio/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/portfolio/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/portfolio/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/portfolio/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/portfolio/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/portfolio/deployments",
            created_at: "2022-02-14T21:39:17Z",
            updated_at: "2022-02-19T21:42:14Z",
            pushed_at: "2022-02-19T21:42:22Z",
            git_url: "git://github.com/Shauandsss/portfolio.git",
            ssh_url: "git@github.com:Shauandsss/portfolio.git",
            clone_url: "https://github.com/Shauandsss/portfolio.git",
            svn_url: "https://github.com/Shauandsss/portfolio",
            homepage: null,
            size: 2820,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 367606662,
            node_id: "MDEwOlJlcG9zaXRvcnkzNjc2MDY2NjI=",
            name: "Tinder_Bot",
            full_name: "Shauandsss/Tinder_Bot",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/Tinder_Bot",
            description: "Bot to like on tinder, made in python",
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/Tinder_Bot",
            forks_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/branches{/branch}",
            tags_url: "https://api.github.com/repos/Shauandsss/Tinder_Bot/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/Tinder_Bot/deployments",
            created_at: "2021-05-15T10:51:04Z",
            updated_at: "2021-05-15T10:52:00Z",
            pushed_at: "2021-05-15T10:51:58Z",
            git_url: "git://github.com/Shauandsss/Tinder_Bot.git",
            ssh_url: "git@github.com:Shauandsss/Tinder_Bot.git",
            clone_url: "https://github.com/Shauandsss/Tinder_Bot.git",
            svn_url: "https://github.com/Shauandsss/Tinder_Bot",
            homepage: null,
            size: 0,
            stargazers_count: 0,
            watchers_count: 0,
            language: "Python",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 416395180,
            node_id: "R_kgDOGNGvrA",
            name: "ViverdeCilios",
            full_name: "Shauandsss/ViverdeCilios",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/ViverdeCilios",
            description: null,
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/ViverdeCilios",
            forks_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/collaborators{/collaborator}",
            teams_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/teams",
            hooks_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/branches{/branch}",
            tags_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/ViverdeCilios/deployments",
            created_at: "2021-10-12T15:34:19Z",
            updated_at: "2021-10-12T15:46:22Z",
            pushed_at: "2021-10-12T20:37:48Z",
            git_url: "git://github.com/Shauandsss/ViverdeCilios.git",
            ssh_url: "git@github.com:Shauandsss/ViverdeCilios.git",
            clone_url: "https://github.com/Shauandsss/ViverdeCilios.git",
            svn_url: "https://github.com/Shauandsss/ViverdeCilios",
            homepage: null,
            size: 5504,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
          {
            id: 361317110,
            node_id: "MDEwOlJlcG9zaXRvcnkzNjEzMTcxMTA=",
            name: "wineShop",
            full_name: "Shauandsss/wineShop",
            private: false,
            owner: {
              login: "Shauandsss",
              id: 51674001,
              node_id: "MDQ6VXNlcjUxNjc0MDAx",
              avatar_url:
                "https://avatars.githubusercontent.com/u/51674001?v=4",
              gravatar_id: "",
              url: "https://api.github.com/users/Shauandsss",
              html_url: "https://github.com/Shauandsss",
              followers_url:
                "https://api.github.com/users/Shauandsss/followers",
              following_url:
                "https://api.github.com/users/Shauandsss/following{/other_user}",
              gists_url:
                "https://api.github.com/users/Shauandsss/gists{/gist_id}",
              starred_url:
                "https://api.github.com/users/Shauandsss/starred{/owner}{/repo}",
              subscriptions_url:
                "https://api.github.com/users/Shauandsss/subscriptions",
              organizations_url: "https://api.github.com/users/Shauandsss/orgs",
              repos_url: "https://api.github.com/users/Shauandsss/repos",
              events_url:
                "https://api.github.com/users/Shauandsss/events{/privacy}",
              received_events_url:
                "https://api.github.com/users/Shauandsss/received_events",
              type: "User",
              site_admin: false,
            },
            html_url: "https://github.com/Shauandsss/wineShop",
            description: null,
            fork: false,
            url: "https://api.github.com/repos/Shauandsss/wineShop",
            forks_url: "https://api.github.com/repos/Shauandsss/wineShop/forks",
            keys_url:
              "https://api.github.com/repos/Shauandsss/wineShop/keys{/key_id}",
            collaborators_url:
              "https://api.github.com/repos/Shauandsss/wineShop/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/Shauandsss/wineShop/teams",
            hooks_url: "https://api.github.com/repos/Shauandsss/wineShop/hooks",
            issue_events_url:
              "https://api.github.com/repos/Shauandsss/wineShop/issues/events{/number}",
            events_url:
              "https://api.github.com/repos/Shauandsss/wineShop/events",
            assignees_url:
              "https://api.github.com/repos/Shauandsss/wineShop/assignees{/user}",
            branches_url:
              "https://api.github.com/repos/Shauandsss/wineShop/branches{/branch}",
            tags_url: "https://api.github.com/repos/Shauandsss/wineShop/tags",
            blobs_url:
              "https://api.github.com/repos/Shauandsss/wineShop/git/blobs{/sha}",
            git_tags_url:
              "https://api.github.com/repos/Shauandsss/wineShop/git/tags{/sha}",
            git_refs_url:
              "https://api.github.com/repos/Shauandsss/wineShop/git/refs{/sha}",
            trees_url:
              "https://api.github.com/repos/Shauandsss/wineShop/git/trees{/sha}",
            statuses_url:
              "https://api.github.com/repos/Shauandsss/wineShop/statuses/{sha}",
            languages_url:
              "https://api.github.com/repos/Shauandsss/wineShop/languages",
            stargazers_url:
              "https://api.github.com/repos/Shauandsss/wineShop/stargazers",
            contributors_url:
              "https://api.github.com/repos/Shauandsss/wineShop/contributors",
            subscribers_url:
              "https://api.github.com/repos/Shauandsss/wineShop/subscribers",
            subscription_url:
              "https://api.github.com/repos/Shauandsss/wineShop/subscription",
            commits_url:
              "https://api.github.com/repos/Shauandsss/wineShop/commits{/sha}",
            git_commits_url:
              "https://api.github.com/repos/Shauandsss/wineShop/git/commits{/sha}",
            comments_url:
              "https://api.github.com/repos/Shauandsss/wineShop/comments{/number}",
            issue_comment_url:
              "https://api.github.com/repos/Shauandsss/wineShop/issues/comments{/number}",
            contents_url:
              "https://api.github.com/repos/Shauandsss/wineShop/contents/{+path}",
            compare_url:
              "https://api.github.com/repos/Shauandsss/wineShop/compare/{base}...{head}",
            merges_url:
              "https://api.github.com/repos/Shauandsss/wineShop/merges",
            archive_url:
              "https://api.github.com/repos/Shauandsss/wineShop/{archive_format}{/ref}",
            downloads_url:
              "https://api.github.com/repos/Shauandsss/wineShop/downloads",
            issues_url:
              "https://api.github.com/repos/Shauandsss/wineShop/issues{/number}",
            pulls_url:
              "https://api.github.com/repos/Shauandsss/wineShop/pulls{/number}",
            milestones_url:
              "https://api.github.com/repos/Shauandsss/wineShop/milestones{/number}",
            notifications_url:
              "https://api.github.com/repos/Shauandsss/wineShop/notifications{?since,all,participating}",
            labels_url:
              "https://api.github.com/repos/Shauandsss/wineShop/labels{/name}",
            releases_url:
              "https://api.github.com/repos/Shauandsss/wineShop/releases{/id}",
            deployments_url:
              "https://api.github.com/repos/Shauandsss/wineShop/deployments",
            created_at: "2021-04-25T02:58:10Z",
            updated_at: "2022-01-05T09:03:34Z",
            pushed_at: "2022-01-05T09:03:46Z",
            git_url: "git://github.com/Shauandsss/wineShop.git",
            ssh_url: "git@github.com:Shauandsss/wineShop.git",
            clone_url: "https://github.com/Shauandsss/wineShop.git",
            svn_url: "https://github.com/Shauandsss/wineShop",
            homepage: null,
            size: 97753,
            stargazers_count: 0,
            watchers_count: 0,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: true,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 0,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: [],
            visibility: "public",
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: "master",
          },
        ],
      },
    ];
    /*return [
      {
        slug: "repos",
        items: await basicFetch(`users/${GIT_USER}/repos`),
      },
    ];*/
  },
  getReadmeRepo: async (RepoName) => {
    let info = {};

    if (RepoName) {
      info = await basicFetch(`repos/${GIT_USER}/${RepoName}/readme`);
    }
    return info;
  },
};
