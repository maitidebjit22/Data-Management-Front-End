import { Component,OnInit } from '@angular/core';
import { ImportUserComponent } from '../../import-user/import-user.component';
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
export interface PeriodicElement {
 serial: String;
  hugo_Symbol: String;
  entrez_Gene_Id: String;
  center: String;
  nCBI_Build: String;
  chromosome: String;
  start_Position: String;
  end_Position: String;
  strand: String;
  variant_Classification: String;
  variant_Type: String;
  reference_Allele: String;
  tumor_Seq_Allele1: String;
  tumor_Seq_Allele2: String;
  dbSNP_RS: String;
  dbSNP_Val_Status: String;
  tumor_Sample_Barcode: String;
  matched_Norm_Sample_Barcode: String;
  match_Norm_Seq_Allele1: String;
  match_Norm_Seq_Allele2: String;
  tumor_Validation_Allele1: String;
  tumor_Validation_Allele2: String;
  match_Norm_Validation_Allele1: String;
  match_Norm_Validation_Allele2: String;
  verification_Status: String;
  validation_Status: String;
  mutation_Status: String;
  sequencing_Phase: String;
  sequence_Source: String;
  validation_Method: String;
  score: String;
  bAM_File: String;
  sequencer: String;
  tumor_Sample_UUID: String;
  matched_Norm_Sample_UUID: String;
  genome_Change: String;
  annotation_Transcript: String;
  transcript_Strand: String;
  transcript_Exon: String;
  transcript_Position: String;
  cDNA_Change: String;
  codon_Change: String;
  protein_Change: String;
  other_Transcripts: String;
  refseq_mRNA_Id: String;
  refseq_prot_Id: String;
  swissProt_acc_Id: String;
  swissProt_entry_Id: String;
  description: String;
  uniProt_AApos: String;
  uniProt_Region: String;
  uniProt_Site: String;
  uniProt_Natural_Variations: String;
  uniProt_Experimental_Info: String;
  gO_Biological_Process: String;
  gO_Cellular_Component: String;
  gO_Molecular_Function: String;
  cOSMIC_overlapping_mutations: String;
  cOSMIC_fusion_genes: String;
  cOSMIC_tissue_types_affected: String;
  cOSMIC_total_alterations_in_gene: String;
  tumorscape_Amplification_Peaks: String;
  tumorscape_Deletion_Peaks: String;
  tCGAscape_Amplification_Peaks: String;
  tCGAscape_Deletion_Peaks: String;
  drugBank: String;
  ref_context: String;
  gc_content: String;
  cCLE_ONCOMAP_overlapping_mutations: String;
  cCLE_ONCOMAP_total_mutations_in_gene: String;
  cGC_Mutation_Type: String;
  cGC_Translocation_Partner: String;
  cGC_Tumor_Types_Somatic: String;
  cGC_Tumor_Types_Germline: String;
  cGC_Other_Diseases: String;
  dNARepairGenes_Activity_linked_to_OMIM: String;
  familialCancerDatabase_Syndromes: String;
  mUTSIG_Published_Results: String;
  oREGANNO_ID: String;
  oREGANNO_Values: String;
  tumor_f: String;
  t_alt_count: String;
  t_ref_count: String;
  n_alt_count: String;
  n_ref_count: String;
  gencode_43_secondaryVariantClassification: String;
  achilles_Top_Genes: String;
  clinVar_VCF_AF_ESP: String;
  clinVar_VCF_AF_EXAC: String;
  clinVar_VCF_AF_TGP: String;
  clinVar_VCF_ALLELEID: String;
  clinVar_VCF_CLNDISDB: String;
  clinVar_VCF_CLNDISDBINCL: String;
  clinVar_VCF_CLNDNL: String;
  clinVar_VCF_CLNDNINCL: String;
  clinVar_VCF_CLNHGVS: String;
  clinVar_VCF_CLNREVSTAT: String;
  clinVar_VCF_CLNSIG: String;
  clinVar_VCF_CLNSIGCONF: String;
  clinVar_VCF_CLNSIGINCL: String;
  clinVar_VCF_CLNVC: String;
  clinVar_VCF_CLNVCSO: String;
  clinVar_VCF_CLNVI: String;
  clinVar_VCF_DBVARID: String;
  clinVar_VCF_GENEINFO: String;
  clinVar_VCF_MC: String;
  clinVar_VCF_ORIGIN: String;
  clinVar_VCF_RS: String;
  clinVar_VCF_ID: String;
  clinVar_VCF_FILTER: String;
  cosmicFusion_fusion_id: String;
  familial_Cancer_Genes_Synonym: String;
  familial_Cancer_Genes_Reference: String;
  gencode_XHGNC_hgnc_id: String;
  hGNC_HGNC_ID: String;
  hGNC_Approved_name: String;
  hGNC_Status: String;
  hGNC_Locus_type: String;
  hGNC_Locus_group: String;
  hGNC_Previous_symbols: String;
  hGNC_Previous_name: String;
  hGNC_Alias_symbols: String;
  hGNC_Alias_names: String;
  hGNC_Chromosome: String;
  hGNC_Date_modified: String;
  hGNC_Date_symbol_changed: String;
  hGNC_Date_name_changed: String;
  hGNC_Accession_numbers: String;
  hGNC_Enzyme_IDs: String;
  hGNC_NCBI_Gene_ID: String;
  hGNC_Ensembl_gene_ID: String;
  hGNC_Pubmed_IDs: String;
  hGNC_RefSeq_IDs: String;
  hGNC_Gene_group_ID: String;
  hGNC_Gene_group_name: String;
  hGNC_CCDS_IDs: String;
  hGNC_Vega_IDs: String;
  hGNC_NCBI_Gene_ID_supplied_by_NCBI: String;
  hGNC_OMIM_ID_supplied_by_OMIM: String;
  hGNC_RefSeq_supplied_by_NCBI: String;
  hGNC_UniProt_ID_supplied_by_UniProt: String;
  hGNC_Ensembl_ID_supplied_by_Ensembl: String;
  hGNC_UCSC_ID_supplied_by_UCSC: String;
  oreganno_Build: String;
  simple_Uniprot_alt_uniprot_accessions: String;
  dbSNP_ASP: String;
  dbSNP_ASS: String;
  dbSNP_CAF: String;
  dbSNP_CDA: String;
  dbSNP_CFL: String;
  dbSNP_COMMON: String;
  dbSNP_DSS: String;
  dbSNP_G5: String;
  dbSNP_G5A: String;
  dbSNP_GENEINFO: String;
  dbSNP_GNO: String;
  dbSNP_HD: String;
  dbSNP_INT: String;
  dbSNP_KGPhase1: String;
  dbSNP_KGPhase3: String;
  dbSNP_LSD: String;
  dbSNP_MTP: String;
  dbSNP_MUT: String;
  dbSNP_NOC: String;
  dbSNP_NOV: String;
  dbSNP_NSF: String;
  dbSNP_NSM: String;
  dbSNP_NSN: String;
  dbSNP_OM: String;
  dbSNP_OTH: String;
  dbSNP_PM: String;
  dbSNP_PMC: String;
  dbSNP_R3: String;
  dbSNP_R5: String;
  dbSNP_REF: String;
  dbSNP_RV: String;
  dbSNP_S3D: String;
  dbSNP_SAO: String;
  dbSNP_SLO: String;
  dbSNP_SSR: String;
  dbSNP_SYN: String;
  dbSNP_TOPMED: String;
  dbSNP_TPA: String;
  dbSNP_U3: String;
  dbSNP_U5: String;
  dbSNP_VC: String;
  dbSNP_VP: String;
  dbSNP_WGT: String;
  dbSNP_WTD: String;
  dbSNP_dbSNPBuildID: String;
  dbSNP_ID: String;
  dbSNP_FILTER: String;
  dbSNP_RSPOS: String;
  dbSNP_VLD: String;
  aS_FilterStatus: String;
  aS_SB_TABLE: String;
  aS_UNIQ_ALT_READ_COUNT: String;
  cONTQ: String;
  dP: String;
  eCNT: String;
  gERMQ: String;
  mBQ: String;
  mFRL: String;
  mMQ: String;
  mPOS: String;
  nALOD: String;
  nCount: String;
  nLOD: String;
  oCM: String;
  pON: String;
  pOPAF: String;
  rOQ: String;
  rPA: String;
  rU: String;
  sEQQ: String;
  sTR: String;
  sTRANDQ: String;
  sTRQ: String;
  tLOD: String;
 
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userFilter:any={serial:''};
    users:any = [];
    p:any;
    displayedColumns: string[] = [
      'serial',
      'hugo_Symbol',
      'entrez_Gene_Id',
      'center',
      'nCBI_Build',
      'chromosome',
      'start_Position',
      'end_Position',
      'strand',
      'variant_Classification',
      'variant_Type',
      'reference_Allele',
      'tumor_Seq_Allele1',
      'tumor_Seq_Allele2',
      'dbSNP_RS',
      'dbSNP_Val_Status',
      'tumor_Sample_Barcode',
      'matched_Norm_Sample_Barcode',
      'match_Norm_Seq_Allele1',
      'match_Norm_Seq_Allele2',
      'tumor_Validation_Allele1',
      'tumor_Validation_Allele2',
      'match_Norm_Validation_Allele1',
      'match_Norm_Validation_Allele2',
      'verification_Status',
      'validation_Status',
      'mutation_Status',
      'sequencing_Phase',
      'sequence_Source',
      'validation_Method',
      'score',
      'bAM_File',
      'sequencer',
      'tumor_Sample_UUID',
      'matched_Norm_Sample_UUID',
      'genome_Change',
      'annotation_Transcript',
      'transcript_Strand',
      'transcript_Exon',
      'transcript_Position',
      'cDNA_Change',
      'codon_Change',
      'protein_Change',
      'other_Transcripts',
      'refseq_mRNA_Id',
      'refseq_prot_Id',
      'swissProt_acc_Id',
      'swissProt_entry_Id',
      'description',
      'uniProt_AApos',
      'uniProt_Region',
      'uniProt_Site',
      'uniProt_Natural_Variations',
      'uniProt_Experimental_Info',
      'gO_Biological_Process',
      'gO_Cellular_Component',
      'gO_Molecular_Function',
      'cOSMIC_overlapping_mutations',
      'cOSMIC_fusion_genes',
      'cOSMIC_tissue_types_affected',
      'cOSMIC_total_alterations_in_gene',
      'tumorscape_Amplification_Peaks',
      'tumorscape_Deletion_Peaks',
      'tCGAscape_Amplification_Peaks',
      'tCGAscape_Deletion_Peaks',
      'drugBank',
      'ref_context',
      'gc_content',
      'cCLE_ONCOMAP_overlapping_mutations',
      'cCLE_ONCOMAP_total_mutations_in_gene',
      'cGC_Mutation_Type',
      'cGC_Translocation_Partner',
      'cGC_Tumor_Types_Somatic',
      'cGC_Tumor_Types_Germline',
      'cGC_Other_Diseases',
      'dNARepairGenes_Activity_linked_to_OMIM',
      'familialCancerDatabase_Syndromes',
      'mUTSIG_Published_Results',
      'oREGANNO_ID',
      'oREGANNO_Values',
      'tumor_f',
      't_alt_count',
      't_ref_count',
      'n_alt_count',
      'n_ref_count',
      'gencode_43_secondaryVariantClassification',
      'achilles_Top_Genes',
      'clinVar_VCF_AF_ESP',
      'clinVar_VCF_AF_EXAC',
      'clinVar_VCF_AF_TGP',
      'clinVar_VCF_ALLELEID',
      'clinVar_VCF_CLNDISDB',
      'clinVar_VCF_CLNDISDBINCL',
      'clinVar_VCF_CLNDNL',
      'clinVar_VCF_CLNDNINCL',
      'clinVar_VCF_CLNHGVS',
      'clinVar_VCF_CLNREVSTAT',
      'clinVar_VCF_CLNSIG',
      'clinVar_VCF_CLNSIGCONF',
      'clinVar_VCF_CLNSIGINCL',
      'clinVar_VCF_CLNVC',
      'clinVar_VCF_CLNVCSO',
      'clinVar_VCF_CLNVI',
      'clinVar_VCF_DBVARID',
      'clinVar_VCF_GENEINFO',
      'clinVar_VCF_MC',
      'clinVar_VCF_ORIGIN',
      'clinVar_VCF_RS',
      'clinVar_VCF_ID',
      'clinVar_VCF_FILTER',
      'cosmicFusion_fusion_id',
      'familial_Cancer_Genes_Synonym',
      'familial_Cancer_Genes_Reference',
      'gencode_XHGNC_hgnc_id',
      'hGNC_HGNC_ID',
      'hGNC_Approved_name',
      'hGNC_Status',
      'hGNC_Locus_type',
      'hGNC_Locus_group',
      'hGNC_Previous_symbols',
      'hGNC_Previous_name',
      'hGNC_Alias_symbols',
      'hGNC_Alias_names',
      'hGNC_Chromosome',
      'hGNC_Date_modified',
      'hGNC_Date_symbol_changed',
      'hGNC_Date_name_changed',
      'hGNC_Accession_numbers',
      'hGNC_Enzyme_IDs',
      'hGNC_NCBI_Gene_ID',
      'hGNC_Ensembl_gene_ID',
      'hGNC_Pubmed_IDs',
      'hGNC_RefSeq_IDs',
      'hGNC_Gene_group_ID',
      'hGNC_Gene_group_name',
      'hGNC_CCDS_IDs',
      'hGNC_Vega_IDs',
      'hGNC_NCBI_Gene_ID_supplied_by_NCBI',
      'hGNC_OMIM_ID_supplied_by_OMIM',
      'hGNC_RefSeq_supplied_by_NCBI',
      'hGNC_UniProt_ID_supplied_by_UniProt',
      'hGNC_Ensembl_ID_supplied_by_Ensembl',
      'hGNC_UCSC_ID_supplied_by_UCSC',
      'oreganno_Build',
      'simple_Uniprot_alt_uniprot_accessions',
      'dbSNP_ASP',
      'dbSNP_ASS',
      'dbSNP_CAF',
      'dbSNP_CDA',
      'dbSNP_CFL',
      'dbSNP_COMMON',
      'dbSNP_DSS',
      'dbSNP_G5',
      'dbSNP_G5A',
      'dbSNP_GENEINFO',
      'dbSNP_GNO',
      'dbSNP_HD',
      'dbSNP_INT',
      'dbSNP_KGPhase1',
      'dbSNP_KGPhase3',
      'dbSNP_LSD',
      'dbSNP_MTP',
      'dbSNP_MUT',
      'dbSNP_NOC',
      'dbSNP_NOV',
      'dbSNP_NSF',
      'dbSNP_NSM',
      'dbSNP_NSN',
      'dbSNP_OM',
      'dbSNP_OTH',
      'dbSNP_PM',
      'dbSNP_PMC',
      'dbSNP_R3',
      'dbSNP_R5',
      'dbSNP_REF',
      'dbSNP_RV',
      'dbSNP_S3D',
      'dbSNP_SAO',
      'dbSNP_SLO',
      'dbSNP_SSR',
      'dbSNP_SYN',
      'dbSNP_TOPMED',
      'dbSNP_TPA',
      'dbSNP_U3',
      'dbSNP_U5',
      'dbSNP_VC',
      'dbSNP_VP',
      'dbSNP_WGT',
      'dbSNP_WTD',
      'dbSNP_dbSNPBuildID',
      'dbSNP_ID',
      'dbSNP_FILTER',
      'dbSNP_RSPOS',
      'dbSNP_VLD',
      'aS_FilterStatus',
      'aS_SB_TABLE',
      'aS_UNIQ_ALT_READ_COUNT',
      'cONTQ',
      'dP',
      'eCNT',
      'gERMQ',
      'mBQ',
      'mFRL',
      'mMQ',
      'mPOS',
      'nALOD',
      'nCount',
      'nLOD',
      'oCM',
      'pON',
      'pOPAF',
      'rOQ',
      'rPA',
      'rU',
      'sEQQ',
      'sTR',
      'sTRANDQ',
      'sTRQ',
      'tLOD',
    ]
    dataSource :any;
  
    constructor(
      public dialog: MatDialog,
      private apiService: ApiService,
      private router: Router,
      private _auth: AuthService,
    ) { }
  
    ngOnInit(): void {
      this.getUsers();
    }
  
    getUsers() {
      this.apiService.getUsers().subscribe(
        (res: any) => {
          if (res.status == 200) {
  
            const ELEMENT_DATA: PeriodicElement[] = res.data;
            this.dataSource = ELEMENT_DATA;
  
          } else {
            alert("Something Went Wrong");
          }
        },
      
      );
    }
  
    importUser() {
  
      const dialogRef = this.dialog.open(ImportUserComponent, {
        minWidth: '300px',
        minHeight: '300px',
        data: {},
      });
      dialogRef.afterClosed().subscribe((result) => {
        if (result != undefined) {
          alert(result.msg);
          this.getUsers();
        }
      });
    }
    exportUser() {
      this.apiService.exportUser().subscribe(
        (res: any) => {
          if(res.status == 200){
              const a = document.createElement("a");
              a.href = "data:text/csv," + res.body;
              let filename = "users";
              a.setAttribute("download", filename + ".csv");
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
          }
          else{
            alert("Something went Wrong")
          }
        },
       
      );
    }

  
   
  }
  
  
  

