// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Voting {

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    Candidate[] private candidates;

    mapping(address => bool) private voters;

    event VoteCast(
        address indexed voter,
        uint256 indexed candidateId,
        string candidateName
    );

    constructor() {
        candidates.push(Candidate(1, "Candidate A", 0));
        candidates.push(Candidate(2, "Candidate B", 0));
        candidates.push(Candidate(3, "Candidate C", 0));
    }

    function vote(uint256 candidateId) public {
        require(!voters[msg.sender], "You have already voted");
        require(
            candidateId > 0 && candidateId <= candidates.length,
            "Invalid candidate ID"
        );

        voters[msg.sender] = true;
        candidates[candidateId - 1].voteCount++;

        emit VoteCast(
            msg.sender,
            candidateId,
            candidates[candidateId - 1].name
        );
    }

    function getCandidate(uint256 candidateId)
        public
        view
        returns (uint256 id, string memory name, uint256 voteCount)
    {
        require(
            candidateId > 0 && candidateId <= candidates.length,
            "Invalid candidate ID"
        );

        Candidate memory candidate = candidates[candidateId - 1];
        return (
            candidate.id,
            candidate.name,
            candidate.voteCount
        );
    }

    function getCandidateCount() public view returns (uint256) {
        return candidates.length;
    }

    function hasVoted(address voter) public view returns (bool) {
        return voters[voter];
    }
}
